const indexModel = require('../../models/indexModel')
Page({
  data: {
    musics:[],
    offset:0,
    total:'',
    id:[],
    isEnd:false
  },
  onLoad() {
    indexModel.getIndex(0).then(res=>{
      var {playlists,total} = res.data;
      // console.log(playlists)
      this.setData({
        musics:playlists,
        total
      })
    })
  },
  onReachBottom(){
    var length = this.data.musics.length;
    if (length < this.data.total) {
      indexModel.getIndex(length).then(res => {
        var { playlists } = res.data;
        this.setData({
          musics: [...this.data.musics, ...playlists],
        })
      })
    }else{
      this.setData({
        isEnd:true
      })
    }
  }
})
