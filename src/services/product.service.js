import {postForm} from './data.service';
import {URL_PRODUCT_BASE} from '../libs/constant';

export const postProduct = (model, files) => {
    return postForm(URL_PRODUCT_BASE, model, files);
}
