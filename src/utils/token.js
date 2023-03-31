import cookie from 'js-cookie'
/**
 * @description 获取token
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
 export function getToken(name,storage = "localStorage") {
    if ('localStorage' === storage) {
        return localStorage.getItem(name)
    } else if ('sessionStorage' === storage) {
        return sessionStorage.getItem(name)
    } else if ('cookie' === storage) {
        return cookie.get(name)
    } else {
        return localStorage.getItem(name)
    }
  }
  
  /**
   * @description 存储token
   * @param name
   * @returns {void|*}
   */
  export function setToken(name,token,storage = "localStorage",config = {expires:7}) {
    if ('localStorage' === storage) {
        return localStorage.setItem(name, JSON.stringify(token))
    } else if ('sessionStorage' === storage) {
        return sessionStorage.setItem(name, JSON.stringify(token))
    } else if ('cookie' === storage) {
        return cookie.set(name, JSON.stringify(token),config)
    } else {
        return localStorage.setItem(name, JSON.stringify(token))
    }
  }
  
  /**
   * @description 移除token
   * @param name
   * @returns {void|Promise<void>}
   */
  export function removeToken(name,storage = "localStorage") {
    if ('localStorage' === storage) {
        return localStorage.removeItem(name)
    } else if ('sessionStorage' === storage) {
        return sessionStorage.clear()
    } else if ('cookie' === storage) {
        return cookie.remove(name)
    } else {
        return localStorage.removeItem(name)
    }
  }
  