// pages/interview/interview.js
import util from '../../utils/util'
let translate = wx.getRecorderManager()
let plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interviewer: '', //谈话人
    interview: '', //被谈话人
    date: '', // 日期
    enterprise: '', //单位
    jobs: '', //岗位
    content: '', //内容
    value: [0,0],
    list: [{
      id: 1,
      UP_NAME: '镇江大港支行',
      childList: [{BR_NAME: '镇江赵声路支行'},{BR_NAME: '镇江大港支行综合管理部'},{BR_NAME: '镇江大港支行行长室'},{BR_NAME: '镇江平昌新城支行'},{BR_NAME: '镇江大港支行其他'},{BR_NAME: '镇江大港支行业务发展部'},{BR_NAME: '镇江大港支行营业部'},{BR_NAME: '中国银行镇江大港支行个人金融部'},{BR_NAME: '镇江大港支行中小企业业务中心'}]
    }, {
      id: 2,
      UP_NAME: '镇江丹徒支行',
      childList: [{BR_NAME: '中国银行镇江宜城支行'},{BR_NAME: '镇江高资支行'},{BR_NAME: '镇江丹徒区支行'},{BR_NAME: '镇江辛丰支行'}]
    }, {
      id: 3,
      UP_NAME: '镇江丹阳支行',
      childList: [{BR_NAME: '镇江丹阳吕城支行'},{BR_NAME: '镇江丹阳访仙支行'},{BR_NAME: '镇江丹阳支行公司业务部'},{BR_NAME: '镇江丹阳西环支行'},{BR_NAME: '镇江丹阳府前支行'},,{BR_NAME: '镇江丹阳后巷支行'},{BR_NAME: '镇江丹阳云阳支行'},{BR_NAME: '镇江丹阳水关路支行'},{BR_NAME: '镇江丹阳南郊支行'},{BR_NAME: '镇江丹阳支行营业部'},{BR_NAME: '镇江丹阳新市口支行'},{BR_NAME: '镇江丹阳华南支行'},{BR_NAME: '镇江丹阳支行行长室'},{BR_NAME: '镇江丹阳界牌支行'},{BR_NAME: '镇江丹阳支行中小企业业务中心'},{BR_NAME: '镇江丹阳开发区支行'},{BR_NAME: '镇江丹阳皇塘支行'},{BR_NAME: '镇江丹阳支行其他'},{BR_NAME: '镇江丹阳支行个人金融部'},{BR_NAME: '镇江丹阳导墅支行'},{BR_NAME: '镇江丹阳复兴路分理处'},{BR_NAME: '镇江丹阳支行金库'},{BR_NAME: '镇江丹阳新桥支行'},{BR_NAME: '镇江丹阳支行综合管理部'},{BR_NAME: '镇江丹阳支行业务管理部'}]
    }, {
      id: 4,
      UP_NAME: '镇江丁卯桥支行',
      childList: [{BR_NAME: '镇江六普支行'},{BR_NAME: '镇江丁卯桥支行行长室'},{BR_NAME: '中国银行镇江丁卯桥支行个人金融部'},{BR_NAME: '镇江丁卯桥支行其他'},{BR_NAME: '镇江丁卯桥支行综合管理部'},{BR_NAME: '镇江丁卯桥支行营业部'},{BR_NAME: '镇江谷阳支行'},{BR_NAME: '镇江江苏大学支行'},{BR_NAME: '镇江学府路支行'},{BR_NAME: '镇江丁卯桥支行业务发展部'},{BR_NAME: '镇江谏壁支行'},{BR_NAME: '镇江丁卯支行中小企业业务中心'}]
    }, {
      id: 5,
      UP_NAME: '镇江分行本部',
      childList: [{BR_NAME: '镇江分行国际结算部'},{BR_NAME: '镇江离退休'},{BR_NAME: '镇江分行运营部'},{BR_NAME: '镇江分行个人金融部信用卡中心'},{BR_NAME: '镇江分行个人金融部'},{BR_NAME: '镇江分行公司业务部'},{BR_NAME: '镇江分行财务管理部'},{BR_NAME: '镇江分行财富管理与私人银行中心'},{BR_NAME: '镇江分行银行卡中心'},{BR_NAME: '镇江分行保卫部'},{BR_NAME: '镇江分行风险管理部'},{BR_NAME: '镇江分行授信执行部'},{BR_NAME: '镇江分行金库'},{BR_NAME: '镇江分行法律合规部'},{BR_NAME: '镇江分行行长办公室'},{BR_NAME: '镇江分行其他'},{BR_NAME: '镇江分行党委'},{BR_NAME: '镇江分行信息科技部'},{BR_NAME: '镇江记帐式国债'},{BR_NAME: '镇江内退'},{BR_NAME: '镇江分行监察部'},{BR_NAME: '镇江分行中小企业业务中心'},{BR_NAME: '镇江分行办公室'},{BR_NAME: '镇江分行人力资源部'},{BR_NAME: '镇江分行党务工作部与工会'},{BR_NAME: '镇江分行法律与合规部'}]
    }, {
      id: 6,
      UP_NAME: '镇江分行营业部汇总',
      childList: [{BR_NAME: '镇江分行营业部'}]
    }, {
      id: 7,
      UP_NAME: '镇江京口支行',
      childList: [{BR_NAME: '镇江青年广场支行'},{BR_NAME: '镇江环城北路支行'},{BR_NAME: '镇江江滨支行'},{BR_NAME: '镇江永安路支行'},{BR_NAME: '镇江京口支行中小企业业务中心'},{BR_NAME: '镇江京口支行其他'},{BR_NAME: '镇江花山湾支行'},{BR_NAME: '镇江京口支行营业部'},{BR_NAME: '中国银行镇江京口支行个人金融部'},{BR_NAME: '镇江南门大街支行'},{BR_NAME: '镇江米山支行'},{BR_NAME: '镇江京口支行综合管理部'},{BR_NAME: '镇江京口支行业务发展部'},{BR_NAME: '镇江解放中路支行'},{BR_NAME: '镇江京口支行行长室'},{BR_NAME: '镇江南门中街支行'},{BR_NAME: '镇江东门支行'}]
    }, {
      id: 8,
      UP_NAME: '镇江句容支行',
      childList: [{BR_NAME: '镇江句容东门支行'},{BR_NAME: '镇江句容支行其他'},{BR_NAME: '镇江句容支行行长室'},{BR_NAME: '镇江句容支行营业部'},{BR_NAME: '镇江句容人民路支行'},{BR_NAME: '镇江句容支行综合管理部'},{BR_NAME: '中国银行句容碧桂园科技新城支行'},{BR_NAME: '中国银行镇江句容支行个人金融部'},{BR_NAME: '镇江句容支行业务发展部'},{BR_NAME: '镇江句容支行中小企业业务中心'},{BR_NAME: '镇江句容华阳南路支行'},,{BR_NAME: '镇江句容文昌东路支行'},{BR_NAME: '镇江句容支行金库'}]
    }, {
      id: 9,
      UP_NAME: '镇江润州支行',
      childList: [{BR_NAME: '镇江润州支行综合管理部'},{BR_NAME: '镇江华地支行'},{BR_NAME: '镇江润州支行中小企业业务中心'},{BR_NAME: '镇江润州支行营业部'},{BR_NAME: '镇江李家大山分理处'},{BR_NAME: '镇江金山支行'},{BR_NAME: '镇江高新科技支行'},{BR_NAME: '镇江电力路支行'},{BR_NAME: '镇江润州支行行长室'},{BR_NAME: '镇江润州支行其他'},{BR_NAME: '镇江黄山路支行'},{BR_NAME: '镇江润州支行业务发展部'},{BR_NAME: '镇江三茅宫支行'},{BR_NAME: '镇江中银支行'},{BR_NAME: ''},{BR_NAME: ''},{BR_NAME: ''},{BR_NAME: ''},{BR_NAME: ''},{BR_NAME: ''},{BR_NAME: ''}]
    }, {
      id: 10,
      UP_NAME: '镇江扬中支行',
      childList: [{BR_NAME: '镇江扬中支行其他'},{BR_NAME: '镇江扬中城东支行'},{BR_NAME: '镇江扬中支行营业部'},{BR_NAME: '镇江扬中江洲路支行'},{BR_NAME: '镇江扬中开发区支行'},{BR_NAME: '中国银行镇江扬中支行个人金融部'},{BR_NAME: '镇江扬中支行综合管理部'},{BR_NAME: '镇江扬中支行中小企业业务中心'},{BR_NAME: '镇江扬中支行业务发展部'},{BR_NAME: '镇江扬中支行金库'},{BR_NAME: '镇江扬中油坊支行'},{BR_NAME: '镇江扬中新坝支行'},{BR_NAME: '镇江扬中支行行长室'},{BR_NAME: '镇江扬中城北支行'}]
    }]
  },
  getEnterprise(e) {
    this.setData({
      enterprise: e.detail.value
    })
  },
  getJobs(e) {
    this.setData({
      jobs: e.detail.value
    })
  },
  changeDate(e) {
    this.setData({
      date: e.detail.value
    })
  },
  getContent(e) {
    this.setData({
      content: e.detail.value
    })
  },
  start() {
    manager.start = function (res) {
      console.log('res', res)
    }
  },
  commit() {
    if (this.data.interviewer && this.data.interview && this.data.date && this.enterprise && this.data.jobs && this.data.content) {
      console.log("提交")
    } else {
      wx.showModal({
        title: '提示',
        content: '请补全信息'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let time = new Date()
    this.setData({
      date: util.formatDate(time),
      interview: options.interview,
      interviewer: options.interviewer
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})