import { CALC_SECURITY, CALC_HEALTH, CALC_FOOD, CALC_TRANSPORTATION  } from "../actions";


export const initialState = {
    totalCost: 0,
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
    transportation: {
        monthly_trans: 0,
        rent: 0,
        utilities: 0,
        moving: 0,
        isTransEditing: false
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
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

        case CALC_SECURITY:
                return {
                    ...state,
                    totalCost: state.totalCost + action.payload.monthly_security + action.payload.phone_change + action.payload.extra_security + action.payload.locks_change,
                    security: {
                        monthly_security: action.payload.monthly_security,
                        phone_change: action.payload.phone_change,
                        extra_security: action.payload.extra_security,
                        locks_change: action.payload.locks_change,
                        isSecurityEditing: false
                    }
                }
    
            case CALC_HEALTH: 
                return {
                    ...state,
                    totalCost: state.totalCost + action.payload.monthly_health_expenses + action.payload.medication_costs + action.payload.health_insurance_costs,
                    health: {
                        monthly_health_expenses: action.payload.monthly_health_expenses,
                        extra_security: action.payload.extra_security, 
                        health_insurance_costs: action.payload.health_insurance_costs,
                        isHealthEditing: false
                    }
                }

            case CALC_TRANSPORTATION:
                console.log('made it to reducer', action.payload)
                return {
                    ...state,
                    totalCost: state.totalCost + action.payload.monthly_trans + action.payload.rent + action.payload.moving + action.payload.utilities,
                    transportation: {
                        monthly_trans: action.payload.monthly_trans,
                        rent: action.payload.rent,
                        moving: action.payload.moving,
                        utilities: action.payload.utilities,
                        isTransEditing: false
                    }
                }

        default: 
        return state;
    }
}