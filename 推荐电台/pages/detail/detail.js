const detailModel = require('../../models/detailModel')
// const audio = wx.getBackgroundAudioManager()
Page({
  data: {
    radio:[],
    id:[],
    isPlay:false
  },
  async onLoad(options) {
    var id = options.id;
    console.log(id)
    detailModel.getDetail({id}).then(detailData=>{
      var program = [detailData.data.program]
      console.log(program)
      var radio = []
      program.forEach(item=>{
        var obj = {}
        obj.id = item.mainSong.id;
        obj.picUrl = item.radio.picUrl;
        obj.name = item.mainSong.name;
        obj.artistName = item.mainSong.artists[0].name;
        obj.info = item.radio.desc;
        radio.push(obj)
      })
      this.setData({
        radio
      })
    })
  }
})