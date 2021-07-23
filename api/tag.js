import {request} from "../plugins/request.js";

// 标签
export const getTags = params => request({
    url: '/api/tags',
    method: 'get'
})