// pages/cart/cart.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL:"/icons/lake.jpg",
    bagPrice:"10",
    cart:false,
    value:0,
    color:'黄色'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  

  onLoad: function (options) {
    console.log(app.globalData.cartdata)
    this.setData({
      value:app.globalData.cartdata
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
    this.setData({
      value:Number(app.globalData.cartdata.num)
    })
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

  },
  stepChange(e){
    app.globalData.cartdata.num=e.detail
    this.setData({
      value:e.detail
    })
  }
})