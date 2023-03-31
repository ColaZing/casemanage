//前端并发promise处理降低服务器请求压力
//思路： 有执行队列和等待队列两个队列。
//      当执行队列任务数量少于最大并发数量时，被添加的任务将会立即推入执行队列执行。
//      若任务数量大于最大并发数，多余的任务将被推入等待队列。
//      每当执行队列中的任务完成，触发.then回调检查等待队列中是否还有任务。
//      若还有任务，等待队列队头的任务将会被推入执行队列并立即执行。
//      至此，通过队列实现了对任意并发数量promise的处理。
export class Scheduler {
    constructor(length = 2){ 
        this.waitingQueue = [] //等待队列
        this.runningTasks = [] //正在运行的任务
        this.length = length //同时进行的任务数量
    }

    //添加异步任务到队列
    add(promiseCreator){
        return new Promise((resolve,reject) => {
            promiseCreator.resolve = resolve
            if(this.runningTasks.length < this.length){
                this.execute(promiseCreator)
            }else{
                this.waitingQueue.push(promiseCreator)
            }
        })
    }

    //执行队列中的异步任务
    execute(promiseCreator) {
        //若执行中的任务数小于length，任务会被推入执行队列中
        this.runningTasks.push(promiseCreator)
        //执行任务
        console.log("executed promise");
        promiseCreator().then((res) => {
            //任务结束时，返回完成的promise
            promiseCreator.resolve(res)
            //从执行队列中移除任务
            this.moveTask(promiseCreator)
            //若等待队列中还有任务，执行队头的任务并从等待队列中删除该任务
            if (this.waitingQueue.length > 0) {
                this.execute(this.waitingQueue.shift())
            }
        })
    }

    //当执行队列中的任务完成，移出该任务
    moveTask(promiseCreator) {
        let index = this.runningTasks.findIndex(item => item.resolve === promiseCreator.resolve)
        this.runningTasks.splice(index, 1)
    }
}

//const scheduler = new Scheduler()

/**
 * @description 添加异步任务到队列，重复添加有效
 * @param {promise} task 
 * @return {promise}
 */
//const addTask = task => scheduler.add(() => task)