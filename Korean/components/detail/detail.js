// components/detail/detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailData:{
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
      var id = this.properties.detailData.id;
      console.log(id)
      wx.navigateTo({
        url:'/pages/list/list?id='+id
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
