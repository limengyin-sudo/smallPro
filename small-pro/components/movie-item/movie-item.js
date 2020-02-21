// components/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(){
      var id = this.properties.data.id;
      console.log(id)
      wx.navigateTo({
        url: '/pages/movieDetail/movieDetail?id='+id
      })
    }
  }
})
