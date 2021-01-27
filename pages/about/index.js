// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},
    currentData: 0,
    mylist: [{
        name: "柳州吴亦凡",
        detail: "2020年1月1日",
        cont: "行走的圣诞树,去看晴雅集",
        tx: "/images/my/lb1.jpg",
        url: "/images/my/my.jpg",
        look: "321",
        zan: "552",
        talk: "236",
      },
      {
        name: "广州梁朝伟",
        detail: "2020年3月26日",
        cont: "打工人一大早开始一个人唱卡拉OK了W",
        tx: "/images/my/lb1.jpg",
        url: "/images/my/lb4.jpg",
        look: "2452",
        zan: "5546",
        talk: "687",
      }
    ],
    movelist: [{
        name: "柳州吴亦凡",
        detail: "2020年1月1日",
        title: "DevExpress Winform ProgressBarControl 修改进度条颜色",
        cont: "DevExpress 的ProgressBarControl默认进度条颜色修改无效，原因是进度条颜色是随着皮肤走的，所以我们设置它的StartColor和EndColor并没有起到作用，如果想起到作用控件本身就必须去掉皮肤样式，或者修改皮肤对应的颜色以下通用的代码是去掉皮肤颜色再去设置进度条颜色",
        tx: "/images/my/lb1.jpg",
        url: "/images/hot/sz.jpg",
        look: "321",
        zan: "552",
        talk: "236",
      },
      {
        name: "深圳吴彦祖",
        detail: "来自 iphone XR",
        title: "雪乡的雪，是许多人的童话梦想",
        cont: "我在雪乡时，看到一个女孩子一只手举着一张雪乡风光的名信片，一只手用手机为其拍照。她说在哈尔滨看到雪乡这套名信片，就跟着它来雪乡了，她一定要看看名信片上的冰雪童话与真实的雪乡是否那结果呢？我问她。她说：“结果是我看到的雪乡比这名信片上的还要美。我是广州人，没有见过雪，终于圆了我的雪的童话梦想。”",
        tx: "/images/my/lb3.jpg",
        url: "/images/hot/cold.jpg",
        look: "65234",
        zan: "955",
        talk: "3003",
      }
    ],
  
    contentImgUrls: [{
      id: 0,
      url: '/images/my/tx.jpg'
    }, {
      id: 1,
      url: '/images/my/tx.jpg'
    }, {
      id: 2,
      url: '/images/my/tx.jpg'
    }, {
      id: 3,
      url: '/images/my/tx.jpg'
    }],
    list: [{
        name: 'scale-down',
        color: 'olive'
      },

    ],
    toggleDelay: false
  },

  navigateToPage: function () {
    wx.navigateTo({
      url: '/pages/add/index',
    })
  },
  chatToPage: function () {
    wx.navigateTo({
      url: '/pages/chatlist/index',
    })
  },

  setToPage: function () {
    wx.navigateTo({
      url: '/pages/set/index',
    })
  },
  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  // 模态框
  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 100, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn(); //调用显示动画
    }, 100)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 100, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 320) //先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },

  // 删除
  delect:function(e){
    var index = e.currentTarget.dataset.indexdel;   //获取自定义的内容下标值
    var mylist = this.data.mylist;      //获取内容列表
    var that = this
    wx.showModal({
      title: '提示',
      content: '您确定要该动态吗？',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          mylist.splice(index,1)   //截取指定的内容
          that.setData({              //重新渲染列表
            mylist: mylist
          })
            console.log("删除成功")
            wx.showToast({
              title: `删除成功`,
              icon: 'none',
              duration: 1000
            })
        } else {//这里是点击了取消以后
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
})