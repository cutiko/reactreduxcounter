import {INCREASE} from '../actions/actions_increase'

export default function (state = null, action) {
    switch (action.type) {
        case INCREASE:
            return state + action.payload;
        default:
            return state;
    }
}