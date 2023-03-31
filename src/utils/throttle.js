//节流函数
/**
 * 
 * @param {function} callback 
 * @param  {...any} params //rest参数，将依次作为原回调参数传入callback
 * @description 使用该函数传参时必须保证callback函数参数有默认值，防止漏传参报错
 * @returns {promises | null}
 */
export const throttle = async (callback,time,...params) => {
    //若请求回调已被标记，表示该请求正在进行中
    if (callback.isSending){
        return {
            message:"请求进行中",
            result:false
        }
    }
    callback.isSending = true //标记正在请求中
    const res = await callback(...params)
    //请求完成清除函数标记 | 或等待延时结束再清除标记
    setTimeout(() => {
        callback.isSending = null
    }, time);
    return res || null
}

export const defineThrottle = (callback,time = 1000) => {
    let start = 0
    return function () {
        let now = new Date()
        if(now - start > time){
            callback.apply(this,arguments)
            start = now
        }
    }
}

export const defineDebounce = (callback,delay = 500) => {
    let timer
    return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this,arguments)
        }, delay);
    }
}
