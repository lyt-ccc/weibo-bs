//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    winWidth: 0,
    winHeight: 0,
    currentTab: 0,

    cardCur: 0,
    hotlist: [{
        id: 1,
        title: '95后女生做寿衣',
        read: '4163280'
      }, {
        id: 2,
        title: '狗子坐飞机多可爱',
        read: '1563798'
      }, {
        id: 3,
        title: '杭州九堡',
        read: '830529'
      }, {
        id: 4,
        title: '名创优品股价暴跌',
        read: '769692'
      },
      {
        id: 5,
        title: '杭州新增1例本土无症状感染者',
        read: '641361'
      }, {
        id: 6,
        title: '硫酸男孩',
        read: '486908'
      }, {
        id: 7,
        title: '西南民族大学',
        read: '485926'
      }, {
        id: 8,
        title: '刘浩存',
        read: '483619'
      },
      {
        id: 9,
        title: '王源',
        read: '476308'
      }, {
        id: 10,
        title: '潮流合伙人',
        read: '452583'
      }, {
        id: 11,
        title: '我国暂不恢复出入境旅游业务',
        read: '448486'
      }, {
        id: 12,
        title: '李宇春',
        read: '427899'
      },
      {
        id: 13,
        title: '电影专业的考试有多难',
        read: '416305'
      }, {
        id: 14,
        title: '傅雷家书',
        read: '400222'
      }, {
        id: 15,
        title: '娜扎问有没有斗鸡眼大赛',
        read: '386182'
      }, {
        id: 16,
        title: '王一博新歌试听',
        read: '366873'
      },
      {
        id: 17,
        title: '无锡',
        read: '317813'
      }, {
        id: 18,
        title: '全国多地卫生巾涨价',
        read: '314883'
      }, {
        id: 19,
        title: '家暴对人的伤害多大',
        read: '313406'
      }, {
        id: 20,
        title: '送你一朵小红花台词',
        read: '310485'
      },
      {
        id: 21,
        title: '原神',
        read: '308397'
      }, {
        id: 22,
        title: '元旦期间减少不必要的出行',
        read: '307835'
      }, {
        id: 23,
        title: '周岩',
        read: '304218'
      }, {
        id: 24,
        title: '北京双侧幻日',
        read: '303137'
      },
      {
        id: 25,
        title: '当你父母是医生时',
        read: '300625'
      }, {
        id: 26,
        title: '没想到小猫咪也有坏心眼',
        read: '296956'
      }, {
        id: 27,
        title: '陈伟霆是住在滑雪场了吗',
        read: '21054'
      }, {
        id: 28,
        title: '2020世界军事热词',
        read: '15716'
      },
      {
        id: 29,
        title: 'FPX新赛季阵容',
        read: '13483'
      },
    ],

    topiclist: [
      {
        id: 1,
        title: "奶奶通过监控给在部队的孙子留言",
        con: "广西72岁的邓妈新，牵挂远在河南当兵的孙子盘海燕。不会用手机的她，得知孙子可以回放家里的监控录像后，常常站在监控下给孙子“留言” 。盘海燕看到视频感动落泪，他说会在军营好好干，让奶奶为他自豪。",
        read: "1348",
        talk: "2241.6万",
        url:"/images/hot/nn.jpg",
        fl:"社会"
      },

      {
        id: 2,
        title: "今冬最强寒潮",
        con: "12月28日至31日，“霸王级”寒潮自北向南横扫中东部大部，各地加入气温“跳水”大赛，来看看你所在城市何时“参赛”？",
        read: "7555",
        talk: "2361.1万",
        url: "/images/hot/cold.jpg",
        fl:"社会"
      },
      {
        id: 3,
        title: "钢琴家傅聪感染新冠去世",
        con: "当地时间20日，据奥地利音乐频道消息，钢琴家傅聪因感染新冠病毒于当日在英国逝世，享年86岁。",
        read: "7.7亿",
        talk: "4.9万",
        url: "/images/hot/gq.jpg",
        fl:"社会 音乐"
      },
      {
        id: 4,
        title: "骗子如何套路杀猪盘受害则",
        con:"在杀猪盘诈骗过程中，骗子会分四步完成骗局。一、上粉。二、取信。三、诱导。四、杀猪。",
        read: "3472万",
        talk: "1537",
        url: "/images/hot/sz.jpg",
        fl:"社会"
      },
      {
        id: 5,
        title: "奶奶通过监控给在部队的孙子留言",
        con: "广西72岁的邓妈新，牵挂远在河南当兵的孙子盘海燕。不会用手机的她，得知孙子可以回放家里的监控录像后，常常站在监控下给孙子“留言” 。盘海燕看到视频感动落泪，他说会在军营好好干，让奶奶为他自豪。",
        read: "1348",
        talk: "2241.6万",
        url:"/images/hot/nn.jpg",
        fl:"社会"
      },

      {
        id: 6,
        title: "今冬最强寒潮",
        con: "12月28日至31日，“霸王级”寒潮自北向南横扫中东部大部，各地加入气温“跳水”大赛，来看看你所在城市何时“参赛”？",
        read: "7555",
        talk: "2361.1万",
        url: "/images/hot/cold.jpg",
        fl:"社会"
      },
      {
        id:7,
        title: "钢琴家傅聪感染新冠去世",
        con: "当地时间20日，据奥地利音乐频道消息，钢琴家傅聪因感染新冠病毒于当日在英国逝世，享年86岁。",
        read: "7.7亿",
        talk: "4.9万",
        url: "/images/hot/gq.jpg",
        fl:"社会 音乐"
      },
      {
        id:8,
        title: "骗子如何套路杀猪盘受害则",
        con:"在杀猪盘诈骗过程中，骗子会分四步完成骗局。一、上粉。二、取信。三、诱导。四、杀猪。",
        read: "3472万",
        talk: "1537",
        url: "/images/hot/sz.jpg",
        fl:"社会"
      },
      {
        id:9,
        title: "奶奶通过监控给在部队的孙子留言",
        con: "广西72岁的邓妈新，牵挂远在河南当兵的孙子盘海燕。不会用手机的她，得知孙子可以回放家里的监控录像后，常常站在监控下给孙子“留言” 。盘海燕看到视频感动落泪，他说会在军营好好干，让奶奶为他自豪。",
        read: "1348",
        talk: "2241.6万",
        url:"/images/hot/nn.jpg",
        fl:"社会"
      },

      {
        id: 10,
        title: "今冬最强寒潮",
        con: "12月28日至31日，“霸王级”寒潮自北向南横扫中东部大部，各地加入气温“跳水”大赛，来看看你所在城市何时“参赛”？",
        read: "7555",
        talk: "2361.1万",
        url: "/images/hot/cold.jpg",
        fl:"社会"
      },
      {
        id: 11,
        title: "今冬最强寒潮",
        con: "12月28日至31日，“霸王级”寒潮自北向南横扫中东部大部，各地加入气温“跳水”大赛，来看看你所在城市何时“参赛”？",
        read: "7555",
        talk: "2361.1万",
        url: "/images/hot/cold.jpg",
        fl:"社会"
      },
    ],

    swiperList: [{
      id: 0,
      type: 'image',
      url: '/images/my/lb1.jpg'
    }, {
      id: 1,
      type: 'image',
      url: '/images/my/lb2.jpg'
    }, {
      id: 2,
      type: 'image',
      url: '/images/my/lb3.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '/images/my/lb4.jpg'
    }, ],

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
          winHeight: res.windowHeight + 1200
        });
      }

    });
  }
  //   var tokens = wx.getStorage({
  //     key: 'token',
  //   });
  //   that.setData({
  //     // id: options.id,
  //     token: tokens
  //   })

  // },
})