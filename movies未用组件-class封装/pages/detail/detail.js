const detailModel = require('../../models/detailModel')
Page({
  data: {
    id:[],
    list:[]
  },
  async onLoad(options) {
    var id = options.id;
    console.log(id)
    var data = await detailModel.getDetail({id});
    var detail = [data.data];
    // console.log(detail)
    var list = [];
    detail.forEach(item=>{
      var obj = {};
      obj.id = item.id;
      obj.title = item.title;
      obj.image = item.images.small;

      obj.write = item.writers[0].name;
      obj.directors = item.directors[0].name;
      obj.casts = item.casts[0].name;
      obj.countries = item.countries;
      obj.languages = item.languages;
      obj.pubdates = item.pubdates;
      obj.genres = item.genres;
      obj.durations = item.durations;
      if(item.summary.length> 160){
        obj.summary = item.summary.slice(0,160)+"..."
      }else{
        obj.summary = item.summary
      }
      obj.aka = item.aka;
      list.push(obj)
      console.log(list)
    })
    this.setData({
      list
    })
  },
})