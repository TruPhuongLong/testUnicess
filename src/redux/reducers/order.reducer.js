import { initState } from '../store/state';
import { typeAction } from '../actions/type.action';

export const OrderReducer = (state = initState.orderState, action) => {
    switch (action.type) {
        case typeAction.GET_LIST_ORDER:
            return {

            }

        case typeAction.GET_CURRENT_ORDER:
            return {

            }

        case typeAction.SET_CURRENT_ORDER:
            return {
                ...state,
                current: action.payload
            }

        default: return state;
    }
}