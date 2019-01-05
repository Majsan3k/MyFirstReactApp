import {UPDATE_DECK, UPDATE_SECRET_CARD} from "../constants/action-types";

const initialState = {
    deck: {cards: [], secretCard: {code:0}}
};

const guessCardReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_DECK:
            return {...state, deck: action.payload};
        case UPDATE_SECRET_CARD:
            return {...state, secretCard: action.secretCard};
        default :
            return state;
    }
};

export default guessCardReducer;