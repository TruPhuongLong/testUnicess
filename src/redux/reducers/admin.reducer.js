import { initState } from '../store/state';
import {typeAction} from '../actions/type.action';

export const AdminReducer = (state = initState.adminState, action) => {
    switch (action.type) {
        case typeAction.GET_LIST_CUSTOMER:
            return {

            }
        case typeAction.GET_LIST_ORDER_OF_INDIVIDUAL_CUSTOMER:
            return {
                
            }

        default: return state;
    }
}