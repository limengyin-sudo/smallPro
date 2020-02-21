// pages/read/read.js
var data = require('../../data/local')
const ReadHttp = require('../../models/ReadHttp')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    postList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var {bannerUrl,postList} = data;
    // console.log(postList)
    var res = await ReadHttp(bannerUrl);
    // console.log(res)
    var banners = res.data.banners.slice(0,5);
    // console.log(banners)
    this.setData({
      banners,
      postList
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