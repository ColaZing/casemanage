//发送POST
export const post = async (callback,resolve,ok,errText) => {
    try{
        const res = await callback()
        if(res.code === 200){
            resolve()
            okMsg(ok)
        }else{
            errMsg(errText + res.result)
        }
    }catch(err){
        errMsg(errText + err)
    }
}