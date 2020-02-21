// pages/musicHome/musicHome.js
const MusicHttp = require('../../models/MusicHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSongs:'',
    janSongs:'',
    djSongs:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function () {
    var hotSongs = await MusicHttp.getHotSongs();
    var janSongs = await MusicHttp.getJanSongs();
    var djSongs = await MusicHttp.getDj();
    // console.log(djSongs)
    var songs = []
    djSongs.result.forEach(item=>{
      var obj = {}
      obj.id = item.id;
      obj.name = item.name;
      obj.coverImgUrl = item.picUrl;
      obj.playCount = item.program.adjustedPlayCount;
      songs.push(obj)
    })
    this.setData({
      hotSongs:hotSongs.playlists.slice(0,3),
      janSongs:janSongs.playlists.slice(0,3),
      djSongs:songs.slice(0,3)
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