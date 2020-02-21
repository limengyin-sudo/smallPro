//index.js
const MusicModel = require('../../models/MusicModel')
Page({
  data:{
    musics:[]
  },
  async onLoad() {
    var data = await MusicModel.getCat();
    var playlists = data.data.playlists;
    var arr = [ ]
    playlists.forEach(item=>{
      var obj = {};
      if(item.name.length > 6){
        obj.name = item.name.slice(0,6)+"...";
      }else{
        obj.name = item.name;
      }
      obj.id = item.id;
      obj.coverImgUrl  = item.coverImgUrl;
      obj.playCount = item.playCount;
      arr.push(obj)
    })
    this.setData({
      musics:arr
    })
  }
})
