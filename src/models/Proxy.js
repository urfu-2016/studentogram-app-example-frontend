import * as io from 'socket.io-client';

import {
    messageReceived,
    streamReceived,
    chatsReceived
} from '../actions/server.js';

export default class Proxy {
    constructor(store) {
        // initialize socket.io
        this.server = io('https://polar-waters-23814.herokuapp.com', {secure: true, port: 20299});

        // bind some listeners to events from server on connection
        this.server.on('connect', () => {
            this.server.on('newMessage', data => store.dispatch(messageReceived(data.author, data.chat, data.message)));
            this.server.on('getLog', data => store.dispatch(streamReceived(data)));
            this.server.on('chatsList', data => store.dispatch(chatsReceived(data)));
        });
    }

    // emit information new message to the server
    send(author, chat, message) {
        this.server.emit('newMessage', {author, chat, message});
    }

    // emit event for getting messages to @chat
    getLog(chat) {
        this.server.emit('getLog', chat);
    }

    // callback for getting information about chats
    onListChats() {
        this.server.emit('chatsList');
    }
}
