import {RECEIVE_MESSAGE, RECEIVE_STREAM} from '../actions/constants.js';

export default function (state = [], action) {
    switch (action.type) {

    case RECEIVE_MESSAGE:
        const messages = state.slice();
        messages.push(action.data);

        return messages;

    case RECEIVE_STREAM:
        return action.messages;

    default:
        return state;
    }
}
