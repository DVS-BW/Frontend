export const CALC_SECURITY = 'CALC_SECURITY';
export const CALC_HEALTH = 'CALC_HEALTH';
export const CALC_FOOD = 'CALC_FOOD';
export const CALC_TRANSPORTATION = 'CALC_TRANSPORTATION';
export const CALC_DEBT = 'CALC_DEBT';

export const calcSecurityAC = item => {
    return {type: CALC_SECURITY, payload: item};
}

export const calcHealthAC = item => {
    return {type: CALC_HEALTH, payload: item}
}

export const calcFoodAC = item => {
    console.log('made it to Food action', item);
    return {type: CALC_FOOD, payload: item}
}

export const calcTransAC = item => {
    return {type: CALC_TRANSPORTATION, payload: item}
}

export const calcDebtAC = item => {
    console.log('made it to action', item);
    return {type: CALC_DEBT, payload: item}
}