import {defineStore, createPinia} from 'pinia'
import {ref} from 'vue'
import {setToken, getToken} from '../utils/token'
//实例化pinia
const pinia = createPinia()
export default pinia

//引用接口
import * as api from '../api'
import {reqSetCompletions} from "../api";
////构建store
export const useStore = defineStore('baseStore', () => {
    const userInfo = ref({})
    /* const getUserInfo = async () => {
        const res = await api.getUserInfo()
        if(res.code === 200){
            userInfo.value = res.data
            if(!getToken('USERINFO','cookie')){
                setToken('USERINFO',res.data,'cookie')
            }
        }
    } */
    // 登录
    const login = async (params) => {
        const {username, password} = params
        const res = await api.reqLogin(username, password)
        if (res.code === 200) {
            userInfo.value = res.data
            if (!getToken('USERINFO', 'cookie')) {
                setToken('USERINFO', res.data, 'cookie')
            }
        }
        return res
    }

    const setUserInfo = (val) => {
        userInfo.value = Object.assign(userInfo.value, val)
    }
    // 搜索视频
    return {userInfo, setUserInfo, login}
})
