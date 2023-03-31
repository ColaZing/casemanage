import TIM from 'tim-js-sdk';
import TIMUploadPlugin from 'tim-upload-plugin';
import { TUICallEngine, TUICallEvent } from "tuicall-engine-webrtc"
let options = {
  SDKAppID: 1400717162 // 接入时需要将 0 替换为您的云通信应用的 SDKAppID，类型为 Number
};
// 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示

// 设置 SDK 日志输出级别，详细分级请参见 setLogLevel 接口的说明
tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
// tim.setLogLevel(1); // release级别，SDK 输出关键信息，生产环境时建议使用

// 注册腾讯云即时通信 IM 上传插件
tim.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});

//语音通话

let tuiOptions = {
  SDKAppID: 1400717162, // 接入时需要将 0 替换为您的云通信应用的 SDKAppID
  tim: tim     // tim 参数适用于业务中已存在 TIM 实例，为保证 TIM 实例唯一性
};
let tuiCallEngine = TUICallEngine.createInstance(tuiOptions);
//登陆组件
tuiCallEngine.login({  
  userID: "jane",
  userSig: "xxxxx",
}).then( res => {
  // success
}).catch( error => {
  console.warn('发生错误:', error);
});
//拨打电话
tuiCallEngine.call({
  userID: "xxx",  // 用户 ID
  type: 2, // 通话类型，0-未知， 1-语音通话，2-视频通话
}).then( res => {
  // success
}).catch( error => {
  console.warn('call error:', error);
});
//多人电话
tuiCallEngine.groupCall({
  userIDList: ['user1', 'user2'], 
  type: 1, 
  groupID: 'IM群组 ID'
}).then( res => {
  // success
}).catch( error => {
  console.warn('groupCall error:', error);
});

//通过 TUICallEngine 中的 on 接口，可以监听通话相关的事件，并绑定对应的处理函数：
tuiCallEngine.on(TUICallEvent.INVITED, () => {   
  // 收到视频通话的邀请
});     
tuiCallEngine.on(TUICallEvent.USER_ACCEPT, () => { 
  // 对方接听了您发出的通话邀请
}); 
tuiCallEngine.on(TUICallEvent.REJECT, () => {
  // 对方拒绝了您发出的通话邀请
});      
tuiCallEngine.on(TUICallEvent.ERROR, () => {
  //SDK 内部发生了错误
});
tuiCallEngine.on(TUICallEvent.KICKED_OUT, () => {
  //重复登陆，收到该回调说明被踢出房间
});
tuiCallEngine.on(TUICallEvent.USER_ENTER, () => {
  //如果有用户同意进入通话，那么会收到此回调
});
tuiCallEngine.on(TUICallEvent.USER_LEAVE, () => {
  //如果有用户同意离开通话，那么会收到此回调
});
tuiCallEngine.on(TUICallEvent.NO_RESP, () => {
  //邀请用户无应答
});
tuiCallEngine.on(TUICallEvent.LINE_BUSY, () => {
  //邀请方忙线
});
tuiCallEngine.on(TUICallEvent.CALLING_TIMEOUT, () => {
  //作为被邀请方会收到，收到该回调说明本次通话超时未应答
});
tuiCallEngine.on(TUICallEvent.USER_AUDIO_AVAILABLE, () => {
  //远端用户开启/关闭了麦克风, 会收到该回调
});
tuiCallEngine.on(TUICallEvent.GROUP_CALL_INVITEE_LIST_UPDATE, () => {
  //群聊更新邀请列表收到该回调
});
tuiCallEngine.on(TUICallEvent.CALLING_CANCEL, () => {
  //作为被邀请方会收到，收到该回调说明本次通话被取消了
});
tuiCallEngine.on(TUICallEvent.CALLING_END, () => {
  //收到该回调说明本次通话结束了
});

//当收到了视频通话邀请之后，您可以调用 TUICallEngine 中的 accept 接口来接听通话消息。 
// 接听通话
tuiCallEngine.accept().then( res => {
    // success
}).catch( error => {
    console.warn('accept error:', error);
});      

//设置昵称&头像
tuiCallEngine.setSelfInfo({
    nickName: 'video', 
    avatar: 'http(s)://url/to/image.jpg'
}).then( res => {
    // success
}).catch( error => {
    console.warn('setSelfInfo error:', error);
});

//挂断和取消通话
tuiCallEngine.hangup().then(() => {
  //success
}).catch(error => {
   console.warn('hangup error:', error);
});

//拒绝通话
tuiCallEngine.on(TUICallEvent.INVITED, () => {
  tuiCallEngine.reject().then(() => {
    //success
  }).catch(error => {
    console.warn('reject error:', error);
  });
});
//打开麦克风
tuiCallEngine.openMicrophone().then(() => {
  //success
}).catch(error => {
  console.warn('reject error:', error);
});
//关闭麦克风
tuiCallEngine.closeMicrophone().then(() => {
  //success
}).catch(error => {
  console.warn('reject error:', error);
});
//登出
tuiCallEngine.logout().then(() => {
  //success
}).catch(error => {
  console.warn('logout error:', error)
});

//退出群组

export default tim