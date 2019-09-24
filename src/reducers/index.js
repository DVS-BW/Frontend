import { CALC_DEBT } from "../actions";



export const initialState = {
    totalCost: 0,
    debt: {},
    health: {},
    food: {
        monthly_food: 0,
        stock_up: 0,
        dine_out: 0
    },
    security: {
        monthly_security: 0,
        phone_change: 0,
        extra_security: 0,
        locks_change: 0
    },
    transportation: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CALC_DEBT:
            return {
                ...state,
                totalCost: state.totalCost + action.payload.monthly_security + action.payload.phone_change + action.payload.extra_security + action.payload.locks_change,
                security: {
                    monthly_security: action.payload.monthly_security,
                    phone_change: action.payload.phone_change,
                    extra_security: action.payload.extra_security,
                    locks_change: action.payload.locks_change
                }
            }

        default: 
        return state;
    }
}