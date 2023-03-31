import {compressAccurately} from 'image-conversion'
//压缩图片方法
export const compress = async (file,size = 140) => {
    const blob = await compressAccurately(file,{
        // 压缩后的图像大小为100kb
        size: 100,
        // 图像压缩尺寸的精度，范围0.8-0.99，默认为0.95; 
        // 这意味着如果图片大小设置为1000Kb，精度为0.9，则认为压缩结果为900Kb-1100Kb的图像是可接受的; 
        accuracy: 0.9,
        type: ["image/jpeg","image/png","image/gif"],
        width: size,
        height: size,
        scale: 0.5,
    })
    return blob
}
export const getBase64 = file =>{
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e =>{
            resolve(reader.result)
        }
        reader.onerror = (error) => reject(error)
    })
}