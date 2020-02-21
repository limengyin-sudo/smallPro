var baseUrl = "https://music.aityp.com/"
function MusicHttp(url,data){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl + url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res.data)
            },
            fail: (err)=>{
                reject(err)
            },
            complete: ()=>{}
        });
    })
}
module.exports = {
    getHotSongs:()=>{
        return MusicHttp('top/playlist',{order:"hot"})
    },
    getJanSongs:()=>{
        return MusicHttp('top/playlist',{cat:"日语"})
    },
    getDj:(data)=>{
        return MusicHttp('personalized/djprogram',data)
    },
    getMore:(url)=>{
        return MusicHttp({
            url
        })
    },
    getPlaylist:(data)=>{
        return MusicHttp('playlist/detail',data)
    },
    getPlayUrl:(data)=>{
        return MusicHttp('song/url',data)
    }
}