export const CALC_SECURITY = 'CALC_SECURITY';
export const CALC_HEALTH = 'CALC_HEALTH';

export const calcSecurityAC = item => {
    // console.log('made it to action!', item);
    return {type: CALC_SECURITY, payload: item};
}

export const calcHealthAC = item => {
    console.log('made it to action', item)
    return {type: CALC_HEALTH, payload: item}
}