function ReadHttp(url){
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err)
            },
            complete: ()=>{}
        });
    })
}
module.exports = ReadHttp;