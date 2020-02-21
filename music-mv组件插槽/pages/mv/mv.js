// pages/mv/mv.js
const MvModel = require('../../models/MvModel')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mv:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    var data = await MvModel.getMv();
    var mvData = data.data.data;
    console.log(mvData)
    var arr = []
    mvData.forEach(item=>{
      var obj = {}
      obj.id = item.id;
      if(item.name.length > 6){
        obj.name = item.name.slice(0,6)+"...";
      }else{
        obj.name = item.name;
      }
      obj.coverImgUrl = item.cover;
      arr.push(obj)
    })
    this.setData({
      mv:arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})