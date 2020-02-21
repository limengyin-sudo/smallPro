// components/index/indexItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indexData:{
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
      var id = this.properties.indexData.id;
      console.log(id)
      wx.navigateTo({
        url: '/pages/songSheet/songSheet?id='+id
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
