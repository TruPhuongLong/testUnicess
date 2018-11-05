import { initState } from '../store/state';
import {typeAction} from '../actions/type.action';

export const ProductReducer = (state = initState.productState, action) => {
    switch (action.type) {
        case typeAction.GET_LIST_PRODUCT:
            return {

            }
        case typeAction.GET_CURRENT_PRODUCT:
            return {
                
            }

        default: return state;
    }
}