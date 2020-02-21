const HTTP = require('./HTTP')
class indexModel extends HTTP{
    static getIndex(){
        return this.request({
            url:"program/recommend"
        })
    }
}
module.exports = indexModel