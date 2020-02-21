const Http = require('../../models/Http')
Page({
  data: {
    ago:[],
    hot:[]
  },
  onLoad: async function () {
    var res = await Http.getHot();
    var hots = res.data.result.hots
    // console.log(hots)
    var hot = []
    hots.forEach(item=>{
      var obj = {}
      obj.first = item.first;
      hot.push(obj)
    })
    this.setData({
      hot
    })
  },
  handleSubmit(event){
    var keyword = event.detail.value.keyword;
    console.log(keyword)
    var ago = this.data.ago;
    ago.unshift(keyword)
    ago = ago.slice(0,6)
    this.setData({
      ago
    })
  }
})
