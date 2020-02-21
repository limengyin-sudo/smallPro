const HTTP = require('./HTTP');
class indexModel extends HTTP{
    static getIndex(offset){
        return this.request({
            url:"top/playlist?cat=韩语",
            data:{
                offset
            }
        })
    }
}
module.exports = indexModel;