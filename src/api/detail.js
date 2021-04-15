import request from '../utils/request.js'

export function getDetail(options){
    return request({
        method:'get',
        url:'/detail',
        params:options
    })
}