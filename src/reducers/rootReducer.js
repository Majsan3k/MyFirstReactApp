import {combineReducers} from 'redux';
import twentyFortyEightReducer from './twentyFortyEightReducer';
import guessCardReducer from './guessCardReducer';

const rootReducer = combineReducers({
    twentyFortyEight: twentyFortyEightReducer,
    guessCard: guessCardReducer
});



export default rootReducer;