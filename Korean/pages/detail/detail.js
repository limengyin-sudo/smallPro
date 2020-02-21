// pages/detail/detail.js
const detailModel = require('../../models/detailModel')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var id = options.id;
    // console.log(id)
    var detailData = await detailModel.getDetail({id});
    var tracks = detailData.data.playlist.tracks;
    // console.log(tracks)
    var songs = [];
    tracks.forEach(item=>{
      var obj = {};
      obj.id = item.id;
      obj.picUrl = item.al.picUrl;
      obj.songName = item.name;
      var minutes = parseInt((item.dt % 3600000) / 60000);
      var seconds = parseInt((item.dt % 60000 ) / 1000);
      if(seconds < 10){
        obj.dt = "0" + minutes + ":" + "0" + seconds;
      }else{
        obj.dt = "0" + minutes + ":" + seconds;
      }
      obj.arName = item.ar[0].name;
      obj.alName = item.al.name;
      songs.push(obj)
    })
    this.setData({
      songs
    })
  },
})