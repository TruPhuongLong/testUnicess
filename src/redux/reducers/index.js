import {combineReducers} from 'redux';

import {OrderReducer} from './order.reducer';
import {ProductReducer} from './product.reducer';
import {AdminReducer} from './admin.reducer';

export const rootReducer = combineReducers({
    orderState: OrderReducer, 
    productState: ProductReducer, 
    adminState: AdminReducer
});