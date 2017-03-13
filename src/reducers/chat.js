import {SELECT_CHAT} from '../actions/constants.js';

export default function chatReducer(state = {}, action) {
    switch (action.type) {

    case SELECT_CHAT:
        return action.chat;

    default:
        return state;
    }
}
