import { typeAction } from './type.action';
import { postOrder } from '../../services/order.service';

export const postOrderAction = (model) => {
    return postOrder(model)
        .then(_ => {
            return {
                type: typeAction.POST_ORDER,
                payload: model
            }
        })
        .catch(error => console.log(error))
}

// export const postOrderAction = (model) => {
//     return postOrder(model)
//         .then(_ => setCurrentOrderAction(model))
//         .catch(error => console.log(error))
// }