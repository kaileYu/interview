// pages/interview/interview.js
import util from '../../utils/util'
let plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()
var that
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
    value: [0, 0],
    list: [{
      UP_NAME: '镇江大港支行',
      childList: [{
        BR_NAME: '镇江赵声路支行'
      }, {
        BR_NAME: '镇江大港支行综合管理部'
      }, {
        BR_NAME: '镇江大港支行行长室'
      }, {
        BR_NAME: '镇江平昌新城支行'
      }, {
        BR_NAME: '镇江大港支行其他'
      }, {
        BR_NAME: '镇江大港支行业务发展部'
      }, {
        BR_NAME: '镇江大港支行营业部'
      }, {
        BR_NAME: '中国银行镇江大港支行个人金融部'
      }, {
        BR_NAME: '镇江大港支行中小企业业务中心'
      }]
    }, {
      UP_NAME: '镇江丹徒支行',
      childList: [{
        BR_NAME: '中国银行镇江宜城支行'
      }, {
        BR_NAME: '镇江高资支行'
      }, {
        BR_NAME: '镇江丹徒区支行'
      }, {
        BR_NAME: '镇江辛丰支行'
      }]
    }, {
      UP_NAME: '镇江丹阳支行',
      childList: [{
        BR_NAME: '镇江丹阳吕城支行'
      }, {
        BR_NAME: '镇江丹阳访仙支行'
      }, {
        BR_NAME: '镇江丹阳支行公司业务部'
      }, {
        BR_NAME: '镇江丹阳西环支行'
      }, {
        BR_NAME: '镇江丹阳府前支行'
      }, {
        BR_NAME: '镇江丹阳后巷支行'
      }, {
        BR_NAME: '镇江丹阳云阳支行'
      }, {
        BR_NAME: '镇江丹阳水关路支行'
      }, {
        BR_NAME: '镇江丹阳南郊支行'
      }, {
        BR_NAME: '镇江丹阳支行营业部'
      }, {
        BR_NAME: '镇江丹阳新市口支行'
      }, {
        BR_NAME: '镇江丹阳华南支行'
      }, {
        BR_NAME: '镇江丹阳支行行长室'
      }, {
        BR_NAME: '镇江丹阳界牌支行'
      }, {
        BR_NAME: '镇江丹阳支行中小企业业务中心'
      }, {
        BR_NAME: '镇江丹阳开发区支行'
      }, {
        BR_NAME: '镇江丹阳皇塘支行'
      }, {
        BR_NAME: '镇江丹阳支行其他'
      }, {
        BR_NAME: '镇江丹阳支行个人金融部'
      }, {
        BR_NAME: '镇江丹阳导墅支行'
      }, {
        BR_NAME: '镇江丹阳复兴路分理处'
      }, {
        BR_NAME: '镇江丹阳支行金库'
      }, {
        BR_NAME: '镇江丹阳新桥支行'
      }, {
        BR_NAME: '镇江丹阳支行综合管理部'
      }, {
        BR_NAME: '镇江丹阳支行业务管理部'
      }]
    }, {
      UP_NAME: '镇江丁卯桥支行',
      childList: [{
        BR_NAME: '镇江六普支行'
      }, {
        BR_NAME: '镇江丁卯桥支行行长室'
      }, {
        BR_NAME: '中国银行镇江丁卯桥支行个人金融部'
      }, {
        BR_NAME: '镇江丁卯桥支行其他'
      }, {
        BR_NAME: '镇江丁卯桥支行综合管理部'
      }, {
        BR_NAME: '镇江丁卯桥支行营业部'
      }, {
        BR_NAME: '镇江谷阳支行'
      }, {
        BR_NAME: '镇江江苏大学支行'
      }, {
        BR_NAME: '镇江学府路支行'
      }, {
        BR_NAME: '镇江丁卯桥支行业务发展部'
      }, {
        BR_NAME: '镇江谏壁支行'
      }, {
        BR_NAME: '镇江丁卯支行中小企业业务中心'
      }]
    }, {
      UP_NAME: '镇江分行本部',
      childList: [{
        BR_NAME: '镇江分行国际结算部'
      }, {
        BR_NAME: '镇江离退休'
      }, {
        BR_NAME: '镇江分行运营部'
      }, {
        BR_NAME: '镇江分行个人金融部信用卡中心'
      }, {
        BR_NAME: '镇江分行个人金融部'
      }, {
        BR_NAME: '镇江分行公司业务部'
      }, {
        BR_NAME: '镇江分行财务管理部'
      }, {
        BR_NAME: '镇江分行财富管理与私人银行中心'
      }, {
        BR_NAME: '镇江分行银行卡中心'
      }, {
        BR_NAME: '镇江分行保卫部'
      }, {
        BR_NAME: '镇江分行风险管理部'
      }, {
        BR_NAME: '镇江分行授信执行部'
      }, {
        BR_NAME: '镇江分行金库'
      }, {
        BR_NAME: '镇江分行法律合规部'
      }, {
        BR_NAME: '镇江分行行长办公室'
      }, {
        BR_NAME: '镇江分行其他'
      }, {
        BR_NAME: '镇江分行党委'
      }, {
        BR_NAME: '镇江分行信息科技部'
      }, {
        BR_NAME: '镇江记帐式国债'
      }, {
        BR_NAME: '镇江内退'
      }, {
        BR_NAME: '镇江分行监察部'
      }, {
        BR_NAME: '镇江分行中小企业业务中心'
      }, {
        BR_NAME: '镇江分行办公室'
      }, {
        BR_NAME: '镇江分行人力资源部'
      }, {
        BR_NAME: '镇江分行党务工作部与工会'
      }, {
        BR_NAME: '镇江分行法律与合规部'
      }]
    }, {
      UP_NAME: '镇江分行营业部汇总',
      childList: [{
        BR_NAME: '镇江分行营业部'
      }]
    }, {
      UP_NAME: '镇江京口支行',
      childList: [{
        BR_NAME: '镇江青年广场支行'
      }, {
        BR_NAME: '镇江环城北路支行'
      }, {
        BR_NAME: '镇江江滨支行'
      }, {
        BR_NAME: '镇江永安路支行'
      }, {
        BR_NAME: '镇江京口支行中小企业业务中心'
      }, {
        BR_NAME: '镇江京口支行其他'
      }, {
        BR_NAME: '镇江花山湾支行'
      }, {
        BR_NAME: '镇江京口支行营业部'
      }, {
        BR_NAME: '中国银行镇江京口支行个人金融部'
      }, {
        BR_NAME: '镇江南门大街支行'
      }, {
        BR_NAME: '镇江米山支行'
      }, {
        BR_NAME: '镇江京口支行综合管理部'
      }, {
        BR_NAME: '镇江京口支行业务发展部'
      }, {
        BR_NAME: '镇江解放中路支行'
      }, {
        BR_NAME: '镇江京口支行行长室'
      }, {
        BR_NAME: '镇江南门中街支行'
      }, {
        BR_NAME: '镇江东门支行'
      }]
    }, {
      UP_NAME: '镇江句容支行',
      childList: [{
        BR_NAME: '镇江句容东门支行'
      }, {
        BR_NAME: '镇江句容支行其他'
      }, {
        BR_NAME: '镇江句容支行行长室'
      }, {
        BR_NAME: '镇江句容支行营业部'
      }, {
        BR_NAME: '镇江句容人民路支行'
      }, {
        BR_NAME: '镇江句容支行综合管理部'
      }, {
        BR_NAME: '中国银行句容碧桂园科技新城支行'
      }, {
        BR_NAME: '中国银行镇江句容支行个人金融部'
      }, {
        BR_NAME: '镇江句容支行业务发展部'
      }, {
        BR_NAME: '镇江句容支行中小企业业务中心'
      }, {
        BR_NAME: '镇江句容华阳南路支行'
      }, {
        BR_NAME: '镇江句容文昌东路支行'
      }, {
        BR_NAME: '镇江句容支行金库'
      }]
    }, {
      UP_NAME: '镇江润州支行',
      childList: [{
        BR_NAME: '镇江润州支行综合管理部'
      }, {
        BR_NAME: '镇江华地支行'
      }, {
        BR_NAME: '镇江润州支行中小企业业务中心'
      }, {
        BR_NAME: '镇江润州支行营业部'
      }, {
        BR_NAME: '镇江李家大山分理处'
      }, {
        BR_NAME: '镇江金山支行'
      }, {
        BR_NAME: '镇江高新科技支行'
      }, {
        BR_NAME: '镇江电力路支行'
      }, {
        BR_NAME: '镇江润州支行行长室'
      }, {
        BR_NAME: '镇江润州支行其他'
      }, {
        BR_NAME: '镇江黄山路支行'
      }, {
        BR_NAME: '镇江润州支行业务发展部'
      }, {
        BR_NAME: '镇江三茅宫支行'
      }, {
        BR_NAME: '镇江中银支行'
      }]
    }, {
      UP_NAME: '镇江扬中支行',
      childList: [{
        BR_NAME: '镇江扬中支行其他'
      }, {
        BR_NAME: '镇江扬中城东支行'
      }, {
        BR_NAME: '镇江扬中支行营业部'
      }, {
        BR_NAME: '镇江扬中江洲路支行'
      }, {
        BR_NAME: '镇江扬中开发区支行'
      }, {
        BR_NAME: '中国银行镇江扬中支行个人金融部'
      }, {
        BR_NAME: '镇江扬中支行综合管理部'
      }, {
        BR_NAME: '镇江扬中支行中小企业业务中心'
      }, {
        BR_NAME: '镇江扬中支行业务发展部'
      }, {
        BR_NAME: '镇江扬中支行金库'
      }, {
        BR_NAME: '镇江扬中油坊支行'
      }, {
        BR_NAME: '镇江扬中新坝支行'
      }, {
        BR_NAME: '镇江扬中支行行长室'
      }, {
        BR_NAME: '镇江扬中城北支行'
      }]
    }],
    array: [
      ['镇江大港支行', '镇江丹徒支行', '镇江丹阳支行', '镇江丁卯桥支行', '镇江分行本部', '镇江分行营业部汇总', '镇江京口支行', '镇江句容支行', '镇江润州支行', '镇江扬中支行'],
      ['镇江赵声路支行', '镇江大港支行综合管理部', '镇江大港支行行长室', '镇江平昌新城支行', '镇江大港支行其他', '镇江大港支行业务发展部', '镇江大港支行营业部', '中国银行镇江大港支行个人金融部', '镇江大港支行中小企业业务中心']
    ],
    recordFlag: true
  },
  change(e) {
    this.setData({
      value: e.detail.value
    })
    this.setData({
      enterprise: this.data.array[0][e.detail.value[0]] + "," + this.data.array[1][e.detail.value[0]]
    })
  },
  columnChange(e) {
    let index = e.detail.value
    let column = e.detail.column
    if (column == 0) {
      let date = this.data.list[index].childList
      let arr = []
      date.map(item => {
        arr.push(item.BR_NAME)
      })
      let array = this.data.array
      array[1] = arr
      this.setData({
        array
      })
    }
  },
  initRecord() {
    let that = this;
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = function (res) {
      console.log(res)
    }
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
    }
    // 识别错误事件
    manager.onError = function (res) {
      console.error("error msg", res)
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log('..............结束录音')
      console.log('录音临时文件地址 -->' + res.tempFilePath);
      console.log('录音总时长 -->' + res.duration + 'ms');
      console.log('文件大小 --> ' + res.fileSize + 'B');
      console.log('语音内容 --> ' + res.result);
      if (res.result == '') {
        wx.showModal({
          title: '提示',
          content: '听不清楚，请重新说一遍！',
          showCancel: false,
          success: function (res) {}
        })
        return;
      }
      var text = that.data.content + res.result;
      that.setData({
        content: text
      })
    }
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
    wx.getSetting({ //检查用户是否授权录音
      success: res => {
        if (res.authSetting["scope.record"]) { //用户授权，开始录音
          console.log("开始录音")
          this.setData({
            recordFlag: false
          })
          manager.start({
            lang: 'zh_CN'
          })
        } else {
          wx.authorize({
            scope: 'scope.record',
            success: res => {
              console.log("开始录音")
              this.setData({
                recordFlag: false
              })
              manager.start({
                lang: 'zh_CN'
              })
            },
            fail: () => {
              wx.showToast({
                title: '录音授权失败',
                icon: 'none'
              })
            }
          })
        }
      }
    })
  },
  stop() { //停止录音
    console.log("停止录音")
    this.setData({
      recordFlag: true
    })
    manager.stop()
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
    this.initRecord();
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