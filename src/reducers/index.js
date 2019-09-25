import { CALC_SECURITY, CALC_HEALTH, CALC_FOOD } from "../actions";
import { CALC_DEBT } from "../actions";



export const initialState = {
    totalCost: 0,
    debt: {},
    health: {
        monthly_health_expenses: 0,
        medication_costs: 0,
        health_insurance_costs: 0,
        isHealthEditing: false
    },
    food: {
        monthly_costs: 0,
        stock_up: 0,
        dineout: 0,
        isFoodEditing: false
    },
    security: {
        monthly_security: 0,
        phone_change: 0,
        extra_security: 0,
        locks_change: 0,
        isSecurityEditing: false
    },
    transportation: {}

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CALC_DEBT:
            return {
                ...state,
            }

        case CALC_FOOD: 
        return {
            ...state,
            totalCost: state.totalCost + action.payload.monthly_costs + action.payload.stock_up + action.payload.dineout,
            health: {
                monthly_food: action.payload.monthly_food,
                stock_up: action.payload.stock_up,
                dine_out: action.payload.dine_out,
                isFoodEditing: false
            }
        }

        default: 
        return state;
    }
}