// pages/list/list.js
const commentModel = require('../../models/commentModel')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var id = options.id;
    console.log(id)
    var listData = await commentModel.getComment({id});
    var hotComments = listData.data.hotComments;
    console.log(hotComments)
    var list = [ ]
    hotComments.forEach(item=>{
      var obj = {}
      obj.avatar = item.user.avatarUrl;
      obj.nickname = item.user.nickname;
      obj.content = item.content;
      // obj.time = item.time;
      var oDate = new Date(item.time);
      var year = oDate.getFullYear();
      var month = oDate.getMonth() + 1;
      var day = oDate.getDate();
      if(month<10 && day<10){
        obj.time = year + "年" + "0" + month + "月" + "0" + day + "日";
      }else if(month < 10 && day > 10){
        obj.time = year + "年" + "0" + month + "月" + day + "日";
      }else if(month > 10 && day < 10){
        obj.time = year + "年" + month + "月" + "0" + day + "日";
      }else{
        obj.time = year + "年" + month + "月" + day + "日";
      }
      obj.likedCount = item.likedCount;
      list.push(obj)
    })
    this.setData({
      list
    })
  },
})