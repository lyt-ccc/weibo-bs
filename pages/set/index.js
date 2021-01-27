// pages/set/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  ToPage:function(){
wx.navigateTo({
  url: '/pages/yj/index',
})
  },
  TologinPage: function () {
    wx.showToast({
      title: '登出成功', //提示文字
      duration: 1000, //显示时长
      mask: true, //是否显示透明蒙层，防止触摸穿透，默认：false  
      icon: 'success', //图标，支持"success"、"loading"  
      success: function () {
        setTimeout(function () {
          wx.reLaunch({
            url: '/pages/login/index',
          })
        }, 1000) 
        // wx.navigateTo({
        //   url: '/pages/login/index',
        // });
      }, //接口调用成功
      fail: function () {}, //接口调用失败的回调函数  
      complete: function () {} //接口调用结束的回调函数  
    })
  },
  navigateToPage: function () {
    wx.switchTab({
      url: '/pages/about/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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