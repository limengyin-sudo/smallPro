const HTTP = require('./HTTP');
class indexModel extends HTTP{
    static getArtist(){
        return this.request({
            url:"top/artists",
        })
    }
}
module.exports = indexModel;