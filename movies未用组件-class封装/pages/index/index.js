const indexModel = require('../../models/indexModel')
Page({
  data: {
    movies:[],
    start:0,
    id:[],
    total:'',
    isEnd:false
  },
  async onLoad(){
    indexModel.getSub({ start: 0 }).then(res => {
      var { subjects, total } = res.data;
      this.setData({
        movies: subjects,
        total
      })
    })
  },
  onReachBottom() {
    var length = this.data.movies.length;
    if (length < this.data.total) {
      indexModel.getSub({ start: length }).then(res => {
        var { subjects } = res.data;
        this.setData({
          movies: [...this.data.movies, ...subjects],
        })
      })
    }else{
      this.setData({
        isEnd:true
      })
    }
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
})
