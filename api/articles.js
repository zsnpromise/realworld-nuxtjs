import {request} from "../plugins/request.js";

// 列表
export const getArticles = params => request({
    url: '/api/articles',
    method: 'get',
    params
})

// 用户自己列表
export const getFeedArticles = params => request({
    url: '/api/articles/feed',
    method: 'get',
    params
})
// 点赞
export const setFavorite = slug => request({
    url: `/api/articles/${slug}/favorite`,
    method: 'post'
})
// 去除点赞
export const delFavorite = slug => request({
    url: `/api/articles/${slug}/favorite`,
    method: 'delete'
})
// 详情
export const getArticle = slug => request({
    url: `/api/articles/${slug}`,
    method: 'get'
})

// 详情
export const getComments = slug => request({
    url: `/api/articles/${slug}/comments`,
    method: 'get'
})