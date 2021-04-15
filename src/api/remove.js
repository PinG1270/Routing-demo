import request from '../utils/request.js'

export function remove(options){
    return request({
        method:'get',
        url:'/remove',
        params:options
    })
}