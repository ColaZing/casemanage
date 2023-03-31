//对密码进行加密
import CryptoJS from 'crypto-js'
const key =  "d4799231575411eca71ca4bb"
export const encrypt= pwd => {
    const enc = CryptoJS.TripleDES.encrypt(pwd,CryptoJS.enc.Utf8.parse(key),{
        mode:CryptoJS.mode.ECB,
        padding:CryptoJS.pad.Pkcs7
    }) 
    return enc.toString()
}