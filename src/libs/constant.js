export const URL_BASE = 'http://localhost:2345/api';

//regular user url:
export const URL_LOGIN = URL_BASE + '/login';
export const URL_SIGNUP = URL_BASE + '/signup';
export const URL_LOGOUT = URL_BASE + '/logout';

//url admin:
const URL_ADMIN_BASE = URL_BASE + '/admin'; // this url use for put /userId and delete /userEmail too.
export const URL_ADMIN_LOGIN = URL_ADMIN_BASE + '/login';
export const URL_ADMIN_SIGNUP_WITH_PERMIT = URL_ADMIN_BASE + '/signupWithPermit';

//Product
export const URL_PRODUCT_BASE = URL_BASE + '/product';
export const URL_PRODUCTS = URL_PRODUCT_BASE + 's';

//Order:
export const URL_ORDER_BASE = URL_BASE + '/order';
export const URL_ORDERS = URL_BASE + 's';

//for upload file:
// importance: name files must be the same in multer:
// example: array('files') -> fd.append('files', f);
export const KEY_FILE_UPLOAD = 'files';

//access_token:
export const ACCESS_TOKEN = 'access_token';

//server will get access_token value from key header
export const HEADER_ACCESS_TOKEN = 'x-access-token';
