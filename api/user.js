import {request} from "../plugins/request.js";

// 登陆
export const login = data => request({
    url: '/api/users/login',
    method: 'post',
    data
})

// 注册

export const register = data => request({
    url: '/api/users',
    method: 'post',
    data
})