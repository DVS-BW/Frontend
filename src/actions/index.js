export const CALC_SECURITY = 'CALC_SECURITY';
export const CALC_HEALTH = 'CALC_HEALTH';
export const CALC_FOOD = 'CALC_FOOD';
export const CALC_TRANSPORTATION = 'CALC_TRANSPORTATION';

export const calcSecurityAC = item => {
    return {type: CALC_SECURITY, payload: item};
}

export const calcHealthAC = item => {
    return {type: CALC_HEALTH, payload: item}
}

export const calcFoodAC = item => {
    return {type: CALC_FOOD, payload: item}
}

export const calcTransAC = item => {
    console.log('made it to action', item);
    return {type: CALC_TRANSPORTATION, payload: item}
}