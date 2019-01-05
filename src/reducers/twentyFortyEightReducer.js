import {UPDATE_COMPONENTS, MOVE} from "../constants/action-types";

const initialState = {
    components: [],
    lastMove: ''
};

const twentyFortyEightReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_COMPONENTS:
            return {...state, components: action.payload};
        case MOVE:
            return {...state, components: action.components, lastMove: action.move};
        default :
            return state;
    }
};

export default twentyFortyEightReducer;