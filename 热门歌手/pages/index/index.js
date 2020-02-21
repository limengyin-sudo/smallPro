const indexModel = require('../../models/indexModel')
Page({
  data: {
    artists:[]
  },
  async onLoad() {
    // var id = options.id;
    // console.log(id)
    var indexData = await indexModel.getArtist();
    var {artists} = indexData.data;
    // console.log(artists)
    this.setData({
      artists
    })
  }
})
