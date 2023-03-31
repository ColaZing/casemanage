export function formatTime(time){////格式化视频时间
    if(time >= 3600){
        let res = [0,0,':',0,0,':',0,0]
        let hours = Math.floor(time / 3600)
        res[0] = Math.floor(hours / 10)
        res[1] = hours % 10
        let minutes = Math.floor((time % 3600) / 60)
        res[3] = Math.floor(minutes / 10)
        res[4] = minutes % 10
        let seconds = (time % 3600) % 60
        res[6] = Math.floor(seconds / 10)
        res[7] = seconds % 10
        return res.join('')
    }else{
        let res = [0,0,':',0,0]
        let minutes = Math.floor(time / 60)
        let seconds = time % 60
        res[0] = Math.floor(minutes / 10)
        res[1] = minutes % 10
        res[3] = Math.floor(seconds / 10)
        res[4] = seconds % 10
        return res.join('')
    }
}