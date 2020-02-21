const HTTP = require('./HTTP')
class detailModel extends HTTP{
    static getDetail({id}){
        return this.request({
            url:"dj/program/detail",
            data:{
                id
            }
        })
    }
    static getPlay({id}){
        return this.request({
            url:"song/url",
            data:{
                id
            }
        })
    }
}
module.exports = detailModel