import axios from "axios";
// 按需导出，因为默认导出被 plugin 占据了
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io/'
})
export default ({ store }) => {
    // 添加请求拦截器
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let { user } = store.state
    if (user && user.token) config.headers.Authorization = `Token ${user.token}`
    // 返回config 配置对象
    return config;
  }, function (error) {
    // 对请求错误做些什么，这个是请求发送之前的异常
    return Promise.reject(error);
  });
}