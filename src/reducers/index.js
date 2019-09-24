import { CALC_DEBT } from "../actions";



export const initialState = {
    totalCost: 0,

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CALC_DEBT:
                console.log('made it to reducer!', action.payload)
            return {
                ...state,
                totalCost: state.totalCost + action.payload.monthly_security + action.payload.phone_change + action.payload.extra_security + action.payload.locks_change
            }

        default: 
        return state;
    }
}