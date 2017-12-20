import {combineReducers} from 'redux';
import Increaser from './reducer_increase';

const rootReducer = combineReducers({
    count: Increaser
});

export default rootReducer;