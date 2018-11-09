import { post, get } from './data.service';
import { URL_SIGNUP, URL_LOGIN, URL_LOGOUT, ACCESS_TOKEN } from '../libs/constant';
import { throws, rejects } from 'assert';

export const login = (model) => {
    return post(URL_LOGIN, model)
        .then(res => {
            const { user, token } = res;
            if(token && user){
                localStorage.setItem(ACCESS_TOKEN, token);
                return user;
            }
        })
        .catch(error => console.log(error));
}

export const signup = (model) => {
    // will get user if signup success
    return post(URL_SIGNUP, model);
}

export const logout = () => {
    return get(URL_LOGOUT)
        .then(res => {
            localStorage.setItem(ACCESS_TOKEN, null);
            return res;
        })
}

// export const getUsers = () => {
//     return get(URL_GET_USERS);
// }


