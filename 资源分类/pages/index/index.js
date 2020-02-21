const indexModel = require("../../models/indexModel")
Page({
  data: {
    Apps:[],
    Ioss:[],
    resources:[],
    recommends:[],
    Androids:[],
    Fronts:[],
    Welfares:[],
    Vedios:[]
  },
  onLoad() {
    indexModel.getIndex().then(res=>{
      var App = res.data.results.App
      var Ios = res.data.results.iOS;
      var resource = res.data.results.拓展资源;
      var recommend = res.data.results.瞎推荐;
      var Android = res.data.results.Android;
      var Front= res.data.results.前端;
      var Welfare = res.data.results.福利;
      var Vedio = res.data.results.休息视频;
      var Apps = [];
      var Ioss = [];
      var resources = [];
      var recommends = [];
      var Androids = [];
      var Fronts = [];
      var Welfares = [];
      var Vedios = [];
      App.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Apps.push(obj)
        this.setData({
          Apps
        })
      })
      Ios.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Ioss.push(obj)
        this.setData({
          Ioss
        })
      })
      resource.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        resources.push(obj)
        this.setData({
          resources
        })
      })
      recommend.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        recommends.push(obj)
        this.setData({
          recommends
        })
      })
      Android.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Androids.push(obj)
        this.setData({
          Androids
        })
      })
      Front.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Fronts.push(obj)
        this.setData({
          Fronts
        })
      })
      Welfare.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Welfares.push(obj)
        this.setData({
          Welfares
        })
      })
      Vedio.forEach(item=>{
        var obj = {}
        obj.id = item._id;
        obj.type = item.type;
        obj.url = item.url;
        obj.desc = item.desc;
        obj.dt = item.createdAt;
        obj.who = item.who;
        Vedios.push(obj)
        this.setData({
          Vedios
        })
      })
    })
  }
})