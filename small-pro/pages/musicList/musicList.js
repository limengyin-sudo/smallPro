// pages/musicList/musicList.js
const MusicHttp = require('../../models/MusicHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:'',
    coverImgUrl:'',
    isPlay:false,
    playId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var id = options.id;
    console.log(id)
    var playlistData = await MusicHttp.getPlaylist({id});
    var songs = []
    playlistData.playlist.tracks.forEach(item=>{
      var obj = {}
      obj.id = item.id;
      obj.coverImage = item.al.picUrl;
      obj.name = item.al.name;
      songs.push(obj)
      // console.log(songs)
    })
    this.setData({
      playlist:songs,
      coverImgUrl:playlistData.playlist.coverImgUrl
    })
  },
  handleItem(event){
    var {id,poster,name} = event.currentTarget.dataset;
    wx.setStorageSync('poster', poster)
    wx.navigateTo({
      url: `/pages/musicPlay/musicPlay?id=${id}&name=${name}`
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
    var playState = wx.getStorageSync('playState');
    var playId = wx.getStorageSync('playId')
    if(playState != null){
      this.setData({
        isPlay:playState
      })
    }
    this.setData({
      playId
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

  }
})