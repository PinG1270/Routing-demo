import request from '../utils/request.js'

export function typeTwoList(option){
    return request({
        mothod:'get',
        url:'/getTypeTwoList',
        params:option
    })
}