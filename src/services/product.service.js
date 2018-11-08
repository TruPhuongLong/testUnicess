import {postForm} from './data.service';
import {URL_PRODUCT} from '../libs/constant';

export const postProduct = (model, files) => {
    return postForm(URL_PRODUCT, model, files);
}
