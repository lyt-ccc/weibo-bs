//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollLeft: 0,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,

    contentImgUrls: [

      {
        id: 0,
        url: '/images/my/lb4.jpg'
      }, {
        id: 1,
        url: '/images/my/lb1.jpg'
      }, {
        id: 2,
        url: '/images/my/lb1.jpg'
      }, {
        id: 3,
        url: '/images/my/tx.jpg'
      }
    ],
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  showToast:function(){
    wx.showToast({
      title: '关注成功',//提示文字
      duration:2000,//显示时长
      mask:true,//是否显示透明蒙层，防止触摸穿透，默认：false  
      icon:'success', //图标，支持"success"、"loading"  
      success:function(){ },//接口调用成功
      fail: function () { },  //接口调用失败的回调函数  
      complete: function () { } //接口调用结束的回调函数  
   })
  },
  isLoading(e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    console.log("options")
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight + 1100
        });
      }
    });
  },
  //下拉刷新
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },
})