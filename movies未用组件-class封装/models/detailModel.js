const HTTP = require('./HTTP')
class detailModel extends HTTP{
    static getDetail({id}){
        return this.request({
            url:`v2/movie/subject/${id}`,
            success:(res)=> {
                callback(res)
            }
        })
    }
}
module.exports = detailModel;