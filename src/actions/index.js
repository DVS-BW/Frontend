export const CALC_DEBT = 'CALC_DEBT';

export const calcDebtAC = item => {
    return {type: CALC_DEBT, payload: item};
}