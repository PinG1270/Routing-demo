import request from '../utils/request.js'

export function typeOne(option){
    return request({
        method:'get',
        url:'/getTypeOne',
        params:option
    })
}