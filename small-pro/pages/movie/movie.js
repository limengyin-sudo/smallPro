// pages/movie/movie.js
const MovieHttp = require('../../models/MovieHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var storageData = wx.getStorageSync("movies");
    if (storageData) {
      this.setData({
        movies: storageData
      })
    } else {
      var movies = {}
      var top250 = await MovieHttp.getTop250();
      var inTheaters = await MovieHttp.getInTheaters();
      var comingSoon = await MovieHttp.getComingSoon();

      movies.top250 = {};
      movies.top250.title = "豆瓣top250";
      movies.top250.data = top250.data.subjects.slice(0, 3);
      movies.top250.subTitle = "top250";

      movies.comingSoon = {};
      movies.comingSoon.title = "即将上映"
      movies.comingSoon.data = comingSoon.data.subjects.slice(0, 3);
      movies.comingSoon.subTitle = "coming_soon";

      movies.inTheaters = {};
      movies.inTheaters.title = "正在热映"
      movies.inTheaters.data = inTheaters.data.subjects.slice(0, 3);
      movies.inTheaters.subTitle = "in_theaters";

      wx.setStorageSync("movies", movies);
      this.setData({
        movies
      })
    }
  },
  handleMore(event){
    var {title,url} = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/movieMore/movieMore?title=${title}&url=${url}`,
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