// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: "",
    name: "",
    isTrue:true,
    location:true,
    user:'',
    longitude: 114.372640,
    latitude: 30.689160,
    markers: [{
      iconPath: "/images/icon/location.png",
      id: 0,
      latitude: 30.689160,
      longitude: 114.372640,
      width: 30,
      height: 30,
      label:{
        content:"湖北大学知行学院",
        color:"#b22222",
        borderWidth:1,
        borderColor:"#b22222",
        borderRadius:5,
        padding:5,
      },
      callout:{
        content:"湖北大学知行学院",
        color:"#b22222",
        borderWidth:1,
        borderColor:"#b22222",
        borderRadius:5,
        padding:5,
      }
    }],
    circles:[{
      longitude: 114.372640,
      latitude: 30.689160,
      radius: 100,
      fillColor: "#C20C0C66"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              var { nickName, avatarUrl } = res.userInfo;
              this.setData({
                user: avatarUrl,
                name: nickName,
                isTrue:false
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(event) {
    console.log(event.detail.userInfo)
    var { nickName, avatarUrl } = event.detail.userInfo;
    this.setData({
      user: avatarUrl,
      name: nickName,
      isTrue:false
    })
  },
  handleImage(){
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: (res)=>{
        // success
        const src = res.tempFilePaths[0]
        this.setData({
          user:src
        })
      }
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