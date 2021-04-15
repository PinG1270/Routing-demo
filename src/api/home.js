import request from '../utils/request.js'

export function getShopList(options){
    return request({
        method:'get',
        url:'/goodlist',
        params:options
    })
}