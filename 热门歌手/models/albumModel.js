const HTTP = require('./HTTP');
class albumModel extends HTTP{
    static getAlbum({id}){
        return this.request({
            url:"artist/album",
            data:{
                id
            }
        })
    }
}
module.exports = albumModel;