const HTTP = require('./HTTP');
class songModel extends HTTP{
    static getSong({id}){
        return this.request({
            url:"artists",
            data:{
                id
            }
        })
    }
}
module.exports = songModel;