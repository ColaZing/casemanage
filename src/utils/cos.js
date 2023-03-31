import COS from 'cos-js-sdk-v5'
import { reqCOSToken } from '../api';
export const defaultParams = {
    Bucket:"cola-1307710698", /* 存储桶 */
    Region:'ap-guangzhou' /* 存储桶所在地域，必须字段 */
}
export const cos = new COS({
    // getAuthorization 必选参数
    getAuthorization: async (options, callback) => {
        // 异步获取临时密钥
        console.log("getting cos authorization");
        const res = (await reqCOSToken()).message; 
        callback({
            TmpSecretId: res.tmpSecretId,
            TmpSecretKey: res.tmpSecretKey,
            SecurityToken: res.sessionToken,
            // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
            StartTime: res.startTime, // 时间戳，单位秒，如：1580000000
            ExpiredTime: res.expiredTime, // 时间戳，单位秒，如：1580000000
        });
    }
});

export const cosURL = "https://cola-1307710698.cos.ap-guangzhou.myqcloud.com/"
//上传对象
export const putObject = (fileObject,key,callback = () => {}) => {
    console.log("pushing object");
    cos.putObject({
        ...defaultParams,   
        Key: key,              /* 必须 */
        StorageClass: 'STANDARD',
        Body: fileObject, // 上传文件对象
        onProgress: function(progressData) {
            console.log(JSON.stringify(progressData));
        }
    }, function(err, data) {
        if(err) console.log(err);
        console.log(data);
        callback()
    });
}

//查询对象
export const getBucket = (bucket,prefix,reciever) => cos.getBucket({
    Bucket: bucket, /* 必须 */
    Region: defaultParams.Region ,     /* 存储桶所在地域，必须字段 */
    Prefix: prefix,           /* 非必须 */
}, function(err, data) {
    console.log(err || data.Contents);
    reciever = data
});

//下载对象
export const getObject = (key,reciever) => cos.getObject({
    ...defaultParams,  
    Key: key,              /* 必须 */
}, function(err, data) {
    console.log(err || data.Body);
    reciever = data
});

//删除对象
export const deleteObject = (key,callback) => cos.deleteObject({
    ...defaultParams,
    Key: key        /* 必须 */
}, function(err, data) {
    console.log(err || data);
    callback()
});

//获取对象url
export const getObjectUrl = async (key,reciever) => cos.getObjectUrl({
    ...defaultParams, 
    Key: key,  /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
    Sign: true,    /* 获取带签名的对象URL */
}, function(err, data) {
    if (err) return console.log(err);
    /* url为对象访问url */

    const url = data.Url;
    if(reciever instanceof Array){
        reciever[reciever.length] = url
    }else{
        reciever.url = url
    }
    /* 复制downloadUrl的值到浏览器打开会自动触发下载 */
    //var downloadUrl = url + (url.indexOf('?') > -1 ? '&' : '?') + 'response-content-disposition=attachment'; // 补充强制下载的参数
});