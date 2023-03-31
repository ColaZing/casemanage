
export const alertMsg = (title,description) => {
    ElMessageBox.alert(
        description,
        title,
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
        }
    )
}
export const alertErr = (title,description) => {
    ElMessageBox.alert(
        description,
        title,
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error',
            center: true,
        }
    )
}
/**
 * @description 确认提示弹窗
 * @param {string} title 
 * @param {string} description 
 * @param {function} confirm 
 * @param {function} cancel 
 */
export const confirmMsg = (title,description,confirm,cancel) => {
    ElMessageBox.confirm(
        description,
        title,
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
        }
    )
    .then(() => {
        confirm()
    })
    .catch(() => {
        cancel()
    })
}
export const okMsg = msg => {
    ElMessage({
        type:"success",
        showClose: true,
        message: msg,
        center: true,
    })
}
export const errMsg = err => {
    ElMessage.error({
        showClose: true,
        message: err,
        center: true,
    })
}
export const warningMsg = msg => {
    ElMessage({
        type:"warning",
        showClose: true,
        message: msg,
        center: true,
    })
}