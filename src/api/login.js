import request from '../utils/request.js'

export function login(options){
    return request({
        method:'get',
        url:'/login',
        params:options
    })
}