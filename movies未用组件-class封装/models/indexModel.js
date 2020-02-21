const HTTP = require('./HTTP')
class indexModel extends HTTP{
    static getSub({start}){
        return this.request({
            url:'v2/movie/top250',
            data:{
                start
            }
        })
    }
}
module.exports = indexModel;