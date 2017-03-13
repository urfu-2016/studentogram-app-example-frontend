import * as io from 'socket.io-client';

export default class Proxy {
    constructor() {
        // initialize socket.io
        this.server = io('https://polar-waters-23814.herokuapp.com', {secure: true, port: 20299});

        // bind some listeners to events from server on connection
        this.server.on('connect', () => {
            this.server.on('newMessage', data => this.onMessage(data.author, data.chat, data.message));
            this.server.on('getLog', data => this.onLog(data));
            this.server.on('chatsList', data => this.onListChats(data));
        });
    }

    // emit information new message to the server
    send(author, chat, message) {
        this.server.emit('newMessage', {author, chat, message});
    }

    // emit event for getting messages to @chat
    getLog(chat, cb = () => {}) {
        this.server.emit('getLog', chat);
        this.logCb = cb;
    }

    // callback for getting new message from server
    onMessage() {
        console.log('onMessage: You should overwrite that behaviour');
    }

    // callback for getting information about chats
    onListChats() {
        console.log('onListChats: You should overwrite that behaviour');
    }

    // callback for getting new list of chats
    onLog(log) {
        if (this.logCb) {
            this.logCb(log || []);
        }
    }
}
