const indexModel = require('../../models/indexModel')
Page({
  data: {
    programs:[]
  },
  async onLoad() {
    // var id = options.id;
    // console.log(id)
    var indexData = await indexModel.getIndex();
    var {programs} = indexData.data;
    // console.log(programs)
    this.setData({
      programs
    })
  }
})
