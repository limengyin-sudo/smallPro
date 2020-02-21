// components/detail/detail.js
const detailModel = require('../../models/detailModel')
const audio = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailData:{
      type:Object,
      value:''
    },
    isPlay:{
      type:Boolean,
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
    click(){
      var id = this.properties.detailData.id;
      console.log(id)
      detailModel.getPlay({id}).then(detailData=>{
        var url = detailData.data.data[0].url;
        console.log(url)
        var play = this.data.play;
        if(play){
          audio.pause()
        }else{
          audio.title = "Limengyin"
          audio.src = url;
        }
        this.setData({
          play:!play
        })
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
