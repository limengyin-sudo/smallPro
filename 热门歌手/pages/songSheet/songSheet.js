const songModel = require('../../models/songModel')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    singer:[],
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var id = options.id;
    // console.log(id)
    songModel.getSong({id}).then(res=>{
      var {hotSongs} = res.data;
      var {artist} = res.data;
      console.log(hotSongs)
      console.log(artist)
      var singer = []
      var songs = []
      var obj = {};
      obj.img1v1Url = artist.img1v1Url;
      obj.name = artist.name;
      singer.push(obj)
      console.log(singer)
      this.setData({
        singer
      })
      hotSongs.forEach(item=>{
        var newObj = {};
        newObj.id = item.ar[0].id;
        newObj.picUrl = item.al.picUrl;
        newObj.name = item.name;
        // obj.dt = item.dt;
        var minutes = parseInt((item.dt % 3600000) / 60000);
        var seconds = parseInt((item.dt % 60000 ) / 1000);
        if(seconds < 10){
          newObj.dt = "0" + minutes + ":" + "0" + seconds;
        }else{
          newObj.dt = "0" + minutes + ":" + seconds;
        }
        newObj.alName = item.al.name;
        songs.push(newObj)
        console.log(songs)
        this.setData({
          songs
        })
      })
    })
  }
})