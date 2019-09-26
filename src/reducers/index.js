import { CALC_SECURITY, CALC_HEALTH, CALC_FOOD, CALC_TRANSPORTATION, CALC_DEBT, GET_SESSION_DATA  } from "../actions";


export const initialState = {
    totalCost: 0,
    health: {
        monthly_health_expenses: 0,
        medication_costs: 0,
        health_insurance_costs: 0,
        miscellaneous_expenses: 0,
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
    },
    debt: {
        credit_card: 0,
        personal_loan: 0,
        car_loan: 0,
        mortgage: 0,
        student_loans: 0,
        other: 0,
        isDebtEditing: false
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CALC_FOOD: 
        console.log(state);
        return {
            ...state,
            totalCost: state.totalCost + (action.payload.monthly_costs - state.food.monthly_costs) + (action.payload.stock_up - state.food.stock_up) + (action.payload.dineout - state.food.dineout),
            food: {
                monthly_costs: action.payload.monthly_costs,
                stock_up: action.payload.stock_up,
                dineout: action.payload.dineout,
                isFoodEditing: false
            }
        }

        case CALC_SECURITY:
                return {
                    ...state,
                    totalCost: state.totalCost + (action.payload.monthly_security - state.security.monthly_security) + (action.payload.phone_change - state.security.phone_change) + (action.payload.extra_security - state.security.extra_security) + (action.payload.locks_change - state.security.locks_change),
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
                    totalCost: state.totalCost + (action.payload.monthly_health_expenses - state.health.monthly_health_expenses) + (action.payload.medication_costs - state.health.medication_costs) + (action.payload.health_insurance_costs - state.health.health_insurance_costs) + (action.payload.miscellaneous_expenses - state.health.miscellaneous_expenses),
                    health: {
                        monthly_health_expenses: action.payload.monthly_health_expenses,
                        medication_costs: action.payload.medication_costs, 
                        health_insurance_costs: action.payload.health_insurance_costs,
                        miscellaneous_expenses: action.payload.miscellaneous_expenses,
                        isHealthEditing: false
                    }
                }

            case CALC_TRANSPORTATION:
                return {
                    ...state,
                    totalCost: state.totalCost + (action.payload.monthly_trans - state.transportation.monthly_trans)+ (action.payload.rent - state.transportation.rent)+ (action.payload.moving - state.transportation.moving)+ (action.payload.utilities - state.transportation.utilities),
                    transportation: {
                        monthly_trans: action.payload.monthly_trans,
                        rent: action.payload.rent,
                        moving: action.payload.moving,
                        utilities: action.payload.utilities,
                        isTransEditing: false
                    }
                }

            case CALC_DEBT:
                return {
                    ...state,
                    totalCost: state.totalCost + (action.payload.credit_card - state.debt.credit_card)+ (action.payload.personal_loan - state.debt.personal_loan) + (action.payload.car_loan - state.debt.car_loan) + (action.payload.mortgage - state.debt.mortgage) + (action.payload.student_loans - state.debt.student_loans) + (action.payload.other - state.debt.other),
                    debt: {
                        credit_card: action.payload.credit_card,
                        personal_loan: action.payload.personal_loan,
                        car_loan: action.payload.car_loan,
                        mortgage: action.payload.mortgage,
                        student_loans: action.payload.student_loans,
                        other: action.payload.other,
                        isDebtEditing: false
                    }
                }

            // case GET_SESSION_DATA:
            //     return {

            //     }
        default: 
        return state;
    }
}