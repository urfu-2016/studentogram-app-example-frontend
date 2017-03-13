import Proxy from '../models/Proxy';
import {selectChat} from '../actions/chats.js';
import {
    RECEIVE_CHATLIST,
    SEND_MESSAGE,
    SELECT_CHAT,
    INIT
} from '../actions/constants.js';

export default store => {
    const server = new Proxy(store);

    return next => {
        return action => {
            switch (action.type) {

            case SEND_MESSAGE:
                server.send(action.author, action.chat, action.message);
                break;

            case SELECT_CHAT:
                server.getLog(action.chat);
                break;

            case RECEIVE_CHATLIST:
                next(action);
                store.dispatch(selectChat(action.chats[0]));
                return;

            case INIT:
                server.onListChats();
                break;

            default:
                break;
            }

            next(action);
        };
    };
};
