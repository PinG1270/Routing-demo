import request from '../utils/request.js'

export function search(options){
    return request({
        method:'get',
        url:'/search',
        params:options
    })
}