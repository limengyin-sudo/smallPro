var baseUrl = "https://music.aityp.com/"
function Http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
            complete: ()=>{}
        });
    })
}
module.exports = {
   getHot:()=>{
     return Http({
         url:"search/hot"
     })
   },
   getBook:(keyword)=>{
    return Http({
        url:`search?keywords=${{keyword}}`,
    })
   }
}