import { CALC_DEBT } from "../actions";



export const initialState = {
    totalCost: 0,

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CALC_DEBT:
            return {
                ...state,
            }

        default: 
        return state;
    }
}