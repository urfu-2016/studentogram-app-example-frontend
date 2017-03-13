import {SELECT_CHAT} from './constants.js';

export function selectChat(chat) {
    return {
        type: SELECT_CHAT,
        chat
    };
}
