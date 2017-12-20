export const INCREASE = "INCREASE";

export function increaser(value) {
    return {
        type: INCREASE,
        payload: value
    };
}