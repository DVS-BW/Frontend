export const CALC_DEBT = 'CALC_DEBT';

export const calcDebtAC = item => {
    console.log('made it to action!', item);
    return {type: CALC_DEBT, payload: item};
}