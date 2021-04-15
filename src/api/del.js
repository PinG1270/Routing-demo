import request from '../utils/request.js'

export function del(options){
    return request({
        method:'get',
        url:'/del',
        params:options
    })
}