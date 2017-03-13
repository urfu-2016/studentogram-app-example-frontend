import {
    RECEIVE_CHATLIST,
    RECEIVE_MESSAGE,
    RECEIVE_STREAM,
    SEND_MESSAGE
} from './constants.js';

export function chatsReceived(chats) {
    return {
        type: RECEIVE_CHATLIST,
        chats
    };
}

export function messageReceived(from, chat, message) {
    return {
        type: RECEIVE_MESSAGE,
        data: {
            message,
            from,
            chat
        }
    };
}

export function streamReceived(messages) {
    return {
        type: RECEIVE_STREAM,
        messages
    };
}

export function sendMessage(author, chat, message) {
    return {
        type: SEND_MESSAGE,
        author,
        chat,
        message
    };
}
