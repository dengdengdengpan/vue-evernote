import axios from 'axios';

// axios 全局配置
axios.defaults.baseURL = 'http://note-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
axios.defaults.withCredentials = true;

// request 使用示例
// request('/auth/login', 'POST', {username: 'dengpan', password: 123456});

// 使用 Promise 进行封装
export default function request(url, reqMethod = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: reqMethod,
            validateStatus(status) {
                return (status >= 200 && status < 300) || status === 400;
            }
        };
        if (reqMethod.toLowerCase() === 'get') {
            option.params = data;
        } else {
            option.data = data;
        }
        axios(option).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject(response.data);
            }
        }).catch(error => {
            console.log(error);
            reject({
                message: '网络异常'
            });
        });
    });
}