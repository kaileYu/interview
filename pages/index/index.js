//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    interviewer: '', //访谈人
    interview: '' //被访谈人
  },
  getInterviewer(e){  //获取访谈人姓名
    this.setData({
      interviewer: e.detail.value
    })
  },
  getInterview(e){ //获取被访谈人姓名
    this.setData({
      interview: e.detail.value
    })
  },
  gotoInterview() {
    if (this.data.interviewer || this.data.interview) {
      wx.navigateTo({
        url: '../interview/interview?interviewer=' + this.data.interviewer + '&interview=' + this.data.interview,
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请补全信息'
      })
    }
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    
  },
})