import axios from 'axios';
console.log(process.env, '环境变量');
let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})
instance.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

instance.interceptors.response.use(resopnse => {
    let data = resopnse.data;
    return data

})

export default instance
