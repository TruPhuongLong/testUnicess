import {URL_ORDER} from '../libs/constant';
import {get, post} from './data.service';

export const getOrder = (userEmail) => {
    return get(URL_ORDER + '/' + userEmail);
}

export const postOrder = (model) => {
    return post(URL_ORDER, model);
}

// export const patchComment = (id) => {
//     return patch(URL_COMMENT + '/' + id);
// }

// export const deleteComment = (id) => {
//     return _delete(URL_COMMENT + '/' + id);
// }