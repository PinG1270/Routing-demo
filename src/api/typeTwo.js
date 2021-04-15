import request from '../utils/request.js'

export function typeTwo(option){
    return request({
        mothod:'get',
        url:'/getTypeTwo',
        params:option
    })
}