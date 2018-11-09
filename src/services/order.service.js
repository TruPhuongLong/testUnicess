import {URL_ORDER_BASE, URL_ORDERS} from '../libs/constant';
import {get, post} from './data.service';

export const getOrder = (userEmail) => {
    return get(URL_ORDERS + '/' + userEmail);
}

export const postOrder = (model) => {
    return post(URL_ORDER_BASE, model);
}

// export const patchComment = (id) => {
//     return patch(URL_COMMENT + '/' + id);
// }

// export const deleteComment = (id) => {
//     return _delete(URL_COMMENT + '/' + id);
// }