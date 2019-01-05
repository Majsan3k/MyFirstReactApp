import {UPDATE_COMPONENTS, MOVE} from "../constants/action-types";

export const updateComponents = newComponents => ({
    type: UPDATE_COMPONENTS,
    payload: newComponents
});

export const changeMove = (newComponents, move) => ({
    type: MOVE,
    components: newComponents,
    move: move
});