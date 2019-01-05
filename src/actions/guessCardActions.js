import {UPDATE_DECK, UPDATE_SECRET_CARD} from "../constants/action-types";

export const updateDeck = deck => ({
    type: UPDATE_DECK,
    payload: deck
});

export const updateSecretCard = secretCard => ({
    type: UPDATE_SECRET_CARD,
    secretCard
});
