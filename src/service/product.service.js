import {postForm} from './data.service';
import {URL_PRODUCT} from '../lib/constant';

export const postProduct = (model, files) => {
    return postForm(URL_PRODUCT, model, files);
}
