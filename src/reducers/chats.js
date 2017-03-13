import {RECEIVE_CHATLIST} from '../actions/constants.js';

export default function chatsListReducer(state = {}, action) {
    switch (action.type) {

    case RECEIVE_CHATLIST:
        return action.chats;

    default:
        return state;
    }
}
