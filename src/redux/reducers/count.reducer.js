import { initState } from '../store/state';

export const CountReducer = (state = initState, action) => {
    switch (action.type) {
        case "inc":
            return {
                n: ++state.n
            }
        case "dec":
            return {
                n: --state.n
            }

        default: return state;
    }
}