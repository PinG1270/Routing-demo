import request from '../utils/request.js'

export function register(options){
    return request({
        method:'get',
        url:'/register',
        params:options
    })
}