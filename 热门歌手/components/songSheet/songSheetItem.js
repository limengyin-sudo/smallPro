// components/songSheet/songSheetItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songData:{
      type:Object,
      value:''
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
    handleClick(){
      var id = this.properties.songData.id;
      console.log(id)
      wx.navigateTo({
        url: '/pages/album/album?id='+id
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
