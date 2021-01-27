// pages/chatlist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatlist: [{
        id: 1,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/tx.jpg",
      },
      {
        id: 2,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb2.jpg",
      },
      {
        id: 3,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb1.jpg",
      },
      {
        id: 4,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/tx.jpg",
      },
      {
        id: 5,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb1.jpg",
      },
      {
        id: 6,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb4.jpg",
      },
      {
        id: 7,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/tx.jpg",
      },
      {
        id: 8,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb1.jpg",
      },
      {
        id: 9,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb2.jpg",
      },
      {
        id: 10,
        name: '广州张家辉',
        message: ' 消息未送达',
        url: "/images/my/lb3.jpg",
      },
    ]
  },

  delectPage: function (e) {
    var index = e.currentTarget.dataset.indexdel; //获取自定义的内容下标值
    var chatlist = this.data.chatlist; //获取内容列表
    var that = this
    wx.showModal({
      title: '提示',
      content: '您确定要该动态吗？',
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          console.log('用户点击确定')
          chatlist.splice(index, 1) //截取指定的内容
          that.setData({ //重新渲染列表
            chatlist: chatlist
          })
          console.log("删除成功")
          wx.showToast({
            title: `删除成功`,
            icon: 'none',
            duration: 1000
          })
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
          wx.showToast({
            title: `已取消删除`,
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },

  ToPage: function () {
    wx.navigateTo({
      url: '/pages/chatdetail/index',
    })
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
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