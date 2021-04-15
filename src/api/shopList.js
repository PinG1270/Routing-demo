import request from '../utils/request.js'

export function shopList(option){
    return request({
        method:'get',
        url:'/shopList',
        params:option
    })
}