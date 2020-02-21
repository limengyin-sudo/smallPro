// pages/readDetail/readDetail.js
const data = require('../../data/local')
var app = getApp();
var audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:'',
    isPlay:false,
    isCollected:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var {id} = options;
    var {postList} = data;
    this.setData({
      item: postList[id],
      id
    })
    audio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
    })
    if(app.globalData.g_isPlay && app.globalData.g_playId == id){
      this.setData({
        isPlay:true
      })
    }else{
      this.setData({
        isPlay:false
      })
    }
    var collection = wx.getStorageSync("collection");
    if (collection) {
      collected = collection[id];
      this.setData({
        isCollected: collected
      })
    } else {
      var collection = {};
      collection[id] = false;
      wx.setStorageSync('collection', collection)
    }
  },
  handlePlay(){
    if(this.data.isPlay){
      audio.pause();
      this.setData({
        isPlay:false
      })
      app.globalData. g_isPlay = false
    }else{
      audio.title = this.data.item.music.title;
      audio.src = this.data.item.music.url;
      audio.play();
      this.setData({
        isPlay:true
      })
      app.globalData. g_isPlay = true;
      app.globalData.g_playId = this.data.id;
    }
  },
  handleCollect(){
    var collection = wx.getStorageSync("collection")
    var collected = !collection[this.data.id];
    collection[this.data.id] = collected;
    this.showModal(collected,collection)
  },
  showModal(collected,collection) {
    wx.showModal({
      title: '收藏',
      content: '收藏此文章',
      success: (res) => {
        if (res.confirm) {
          if (collected) {
            wx.setStorageSync('collection', collection)
            this.setData({
              isCollected: collected
            })
          }
        } else if (res.cancel) {
          if (collected == false) {
            wx.setStorageSync('collection', collection)
            this.setData({
              isCollected: collected
            })
          }
        }
      }
    })
  },
  handleShare(){
    wx.showActionSheet({
      itemList:[
        '分享到微信',
        '分享到QQ'
      ],
      itemColor: '#333',
      success: (res) => {
        console.log(res.tapIndex)
      }
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