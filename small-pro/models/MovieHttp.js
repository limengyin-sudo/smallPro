var baseUrl = "https://douban.uieee.com/v2/movie/"
function MovieHttp({url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            data: {},
            header: {'content-type':'json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports = {
    getTop250:()=>{
        return MovieHttp({
            url:"top250"
        })
    },
    getInTheaters:()=>{
        return MovieHttp({
            url:"in_theaters"
        })
    },
    getComingSoon:()=>{
        return MovieHttp({
            url:"coming_soon"
        })
    },
    getMore:(url)=>{
        return MovieHttp({
            url
        })
    },
    getMovieDetail:(id)=>{
        return MovieHttp({
            url:`subject/${id}`
        })
    }
}