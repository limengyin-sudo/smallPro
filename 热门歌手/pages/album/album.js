const albumModel = require("../../models/albumModel")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotAlbum:[]
  },
  async onLoad(options) {
    var id = options.id;
    console.log(id)
    var albumData = await albumModel.getAlbum({id});
    // console.log(albumData)
    var {hotAlbums} = albumData.data;
    console.log(hotAlbums)
    var arr = [ ]
    hotAlbums.forEach(item=>{
      var obj = {}
      obj.id = item.id;
      obj.picUrl = item.picUrl;
      obj.name = item.name;
      // obj.publishTime = item.publishTime;
      var oDate = new Date(item.publishTime);
      var year = oDate.getFullYear();
      var month = oDate.getMonth() + 1;
      var day = oDate.getDate();
      if(month<10 && day<10){
        obj.publishTime = year + "." + "0" + month + "." + "0" + day;
      }else if(month < 10 && day > 10){
        obj.publishTime = year + "." + "0" + month + "." + day;
      }else if(month > 10 && day < 10){
        obj.publishTime = year + "." + month + "." + "0" + day;
      }else{
        obj.publishTime = year + "." + month + "." + day;
      }
      arr.push(obj)
      this.setData({
        hotAlbum:arr
      })
    })
  }
})