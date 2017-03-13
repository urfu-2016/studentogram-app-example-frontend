import {combineReducers} from 'redux';

import chat from './chat.js';
import chats from './chats.js';
import messages from './messages.js';
import userName from './user.js';

export default combineReducers({
    chat,
    chats,
    messages,
    userName
});
