// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData:{
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
      var id = this.properties.itemData.id;
      // console.log(id)
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
