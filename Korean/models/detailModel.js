const HTTP = require('./HTTP');
class detailModel extends HTTP{
    static getDetail({id}){
        return this.request({
            url:"playlist/detail",
            data:{
                id
            }
        })
    }
}
module.exports = detailModel;