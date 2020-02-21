// pages/musicPlay/musicPlay.js
const MusicHttp = require('../../models/MusicHttp')
const myaudio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    poster:'',
    isPlay:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var id = options.id;
    var name = options.name;
    var poster = wx.getStorageSync('poster')
    var res = await MusicHttp.getPlayUrl({id})
    var url = res.data[0].url;
    myaudio.title = name;
    myaudio.coverImgUrl = poster;
    myaudio.src = url
    this.setData({
      name,
      poster
    })
    wx.setStorageSync('playState', true)
    wx.setStorageSync('playId', id)
    myaudio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
      wx.setStorageSync('playState', true)
    })
    myaudio.onPause(()=>{
      this.setData({
        isPlay:false
      })
      wx.setStorageSync('playState', false)
    })
  },
  handleClick(){
    if(this.data.isPlay){
      myaudio.pause()
      this.setData({
        isPlay:false
      })
      wx.setStorageSync('playState', false)
    }else{
      myaudio.play()
      this.setData({
        isPlay:true
      })
      wx.setStorageSync('playState', true)
    }
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