const HTTP = require('./HTTP')
class indexModel extends HTTP{
    static getIndex(){
        return this.request({
            url:"api/today"
        })
    }
}
module.exports = indexModel;