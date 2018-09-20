import request from '@/helpers/request.js';

const URL = {
    SIGNUP: '/auth/register',
    SIGNIN: '/auth/login',
    SIGNOUT: '/auth/logout',
    GET_INFO: '/auth'
}

export default {
    signup({username, password}) {
        return request(URL.SIGNUP, 'POST', {username, password});
    },
    signin({username, password}) {
        return request(URL.SIGNIN, 'POST', {username, password});
    },
    signout() {
        return request(URL.SIGNOUT);
    },
    getInfo() {
        return request(URL.GET_INFO);
    }
}