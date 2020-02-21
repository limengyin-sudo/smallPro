const HTTP = require('./HTTP');
class commentModel extends HTTP{
    static getComment({id}){
        return this.request({
            url:"comment/music",
            data:{
                id
            }
        })
    }
}
module.exports = commentModel;