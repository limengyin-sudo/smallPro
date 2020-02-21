// pages/movieDetail/movieDetail.js
const MovieHttp = require('../../models/MovieHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var {id} = options;
    var res = await MovieHttp.getMovieDetail(id);
    console.log(res)
    this.setData({
      subject:res.data
    })
  },
  handleImg(event){
    var url = event.currentTarget.dataset.url;
    var casts = this.data.subject.casts;
    var urls = casts.map(item=>{
      return item.avatars.small;
    })
    wx.previewImage({
      current: url, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls,
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