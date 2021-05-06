const app = getApp()
Page({
  data: {
    notshow: true,
    show: false,
    bagPrice: 13.9,
    inventory: 10,
    num: 1,
    buyNumber:1,
    imageURL: "/icons/lake.jpg",
    btnYellow: "primary",
    btnRed: "default",
    buttons: [{
        type: 'default',
        className: '',
        text: '加购物车',
        value: 0
      },
      {
        type: 'default',
        className: '',
        text: '立即购买',
        value: 1
      }
    ],
  },
  stepChange(event) {
    this.setData({
      buyNumber: event.detail
    })
  },
  open: function () {
    this.setData({
      show: !this.data.show,
      notshow: !this.data.notshow
    })
  },
  showPopup() {
    this.setData({
      show: true
    });
  },
  importCart(e) {
    app.globalData.cartdata.num =app.globalData.cartdata.num+this.data.buyNumber;
  
    wx.showToast({
      title: '添加成功！',
    })
    this.setData({
      show: false
    })
  },
  onClose() {
    this.setData({
      show: false
    });
  },

  chooseYellow() {
    this.setData({
      btnYellow: this.data.btnYellow == "default" ? 'primary' : 'default'
    })
  },
  chooseRed() {
    this.setData({
      btnRed: this.data.btnRed == "default" ? 'primary' : 'default'
    })
  }


});