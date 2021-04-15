import request from '../utils/request.js'

export function getAdd(options){
    console.log(options);
    return request({
        method:'get',
        url:'/add',
        params:options
    })
}