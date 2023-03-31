import requests from "./request";
/////////////////定义并暴露请求函数///////////////////

//登录注册相关请求
///获取验证码///
export const requestCode = phone => requests({url: "/sendphone/?phone=" + phone, method: "GET"})
///验证验证码///
export const reqCheckCode = (phone, code) => requests({
    url: "/checkcode/?phone=" + phone + "&code=" + code,
    method: "GET"
})
///登陆///
export const reqLogin = (username, password) => requests({url: "/signin/", data: {username, password}, method: "POST"})
///注册///
export const reqRegister = params => requests({url: "/signup/", data: params, method: "POST"})
///验证登录状态///
export const reqLoginState = () => requests({url: "/userinfo", method: "GET"})
///登出///
export const reqLogout = () => requests({url: "/logout", method: "GET"})

//用户信息相关请求
///修改头像
export const reqSetAvatar = params => requests({url: "/head_img_add/", method: "POST", data: params})
///获取对象存储服务器签名
export const reqCOSToken = () => requests({url: "/getsecret/", method: "GET"})
///修改手机///  params:id,code,mobile
export const reqChangeMobile = params => requests({url: "/changeMobile/", method: "POST", data: params})
///修改签名///  params:id,motto
export const reqChangeMotto = params => requests({url: "/motto/", method: "POST", data: params})
///修改密码///  params  {id:string,prev:string,new:string)
export const reqChangePassword = params => requests({url: "/changePassword/", method: "POST", data: params})
///查询手机号/// query uid = string
export const reqMobile = uid => requests({url: "/queryMobile/?uid=" + uid, method: "GET"})
///查询我的帖子///  params  {id:string,start:number,num:number)
export const reqMyInvitation = params => requests({url: "/myInvitation/", method: "POST", data: params})
///查询我的点赞///  params  {id:string,start:number,num:number)
export const reqMyLike = params => requests({url: "/myLike/", method: "POST", data: params})
///查询我的评论///  params  {id:string,start:number,num:number)
export const reqMyComment = params => requests({url: "/myComment/", method: "POST", data: params})
///查询我的消息///  params  {id:string,start:number,num:number)
export const reqMyMessage = params => requests({url: "/myMessage/", method: "POST", data: params})
///设置/// params {showMobile:boolean,showInvitation:boolean,showLike:boolean,showComment:boolean}
export const reqSet = params => requests({url: "/set/", method: "POST", data: params})
///获取其他用户信息/// params {uid:string}
export const reqOtherUser = params => requests({url: "/userInfo/", method: "POST", data: params})

//消息收发相关请求

//视频推荐相关请求

//帖子评论相关请求
///发送帖子///
export const reqPublish = params => requests({url: "/publish/", method: "POST", data: params})
///请求帖子列表///
export const reqAllInvitation = (kid, start, num) => requests({
    url: "/topic/?kid=" + kid + "&start=" + start + "&num=" + num,
    method: "GET"
})
///获取帖子总数///
export const reqInvitationCount = () => requests({url: "/gettopicnum/", method: "GET"})
///关键词搜索帖子列表(keys)///
export const reqSearchInvitation = params => requests({url: "/topic/", method: "POST", data: params})
///请求单条帖子评论///
export const reqInvitation = (tid, start, num) => requests({
    url: `/single/?tid=${tid}&start=${start}&num=${num}`,
    method: "GET"
})
///查询单条帖子评论数量
export const reqCommentCount = tid => requests({url: `/getreplynum/?tid=${tid}`, method: "GET"})
///删除单条帖子///
export const reqDeleteInvitation = tid => requests({url: `/deleteInvitation/?tid=${tid}`, method: "GET"})
///发布帖子评论///
export const reqComment = params => requests({url: `/single/`, method: "POST", data: {type: "send", params}})
///删除帖子评论///
export const reqDeleteComment = id => requests({url: `/single/`, method: "POST", data: {type: "delete", r_id: id}})
///点赞帖子///
export const reqLikeInvitation = tid => requests({url: `/like/?tid=${tid}`, method: "GET"})
///查询帖子是否点赞///
export const reqIsLikeInvitation = tid => requests({url: `/iflike/?tid=${tid}`, method: "GET"})

//其它请求
///解析视频地址///
export const reqParseURL = (url, id) => requests({url: `/video/?url=${url}&id=${id}`, method: "GET"})
///解析视频标题///
export const reqParseTitle = url => requests({url: `/title/?url=${url}`, method: "GET"})

// 搜索视频
export const reqSearch = (wd, source, pg) => requests({url: "/localsearch/", data: {wd, source, pg}, method: "POST"})


// gpt相关接口
//获取模型列表
export const reqModels = url => requests({url: `/models`, method: "GET"})

// 发送聊天消息
export const reqSetCompletions = (user, session, prompt, system, model, max_tokens, temperature, top_p, frequency_penalty, presence_penalty) => requests({
    url: "/setcompletions/",
    data: {
        user,
        session,
        prompt,
        system,
        model,
        max_tokens,
        temperature,
        top_p,
        frequency_penalty,
        presence_penalty
    },
    method: "POST"
})