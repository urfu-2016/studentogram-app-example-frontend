import React from 'react';
import randomWord from 'random-lorem';
import styles from './style.css';

import Proxy from '../../models/Proxy';

import ChatsList from '../ChatsList';
import Chat from '../Chat';

/**
 * Main component for out Studentogram chat
 */
class App extends React.Component {
    constructor() {
        super(...arguments);

        // we'll store here state for all application
        this.state = {
            userName: randomWord(),
            chat: null,
            chats: [],
            messages: []
        };

        this.handleSend = this.handleSend.bind(this);
        this.handleSelectChat = this.handleSelectChat.bind(this);
    }

    /**
     * initialize proxy and listeners
     */
    componentDidMount() {
        this.proxy = new Proxy();
        this.proxy.onMessage = (author, chat, message) => this.handleMessage(author, chat, message);
        this.proxy.onListChats = list => this.handleList(list);
    }

    /**
     * Handles chat's list update
     * @param {array} chats – array of chat names
     */
    handleList(chats) {
        this.setState({chats});
        this.handleSelectChat(chats && chats[0]);
    }

    /**
     * Adds new message to the chat
     * @param {string} author author's name
     * @param {string} chat
     * @param {string} message
     */
    handleMessage(author, chat, message) {
        if (chat !== this.state.chat) {
            return;
        }

        const messages = this.state.messages.concat();
        messages.push({author, message});

        this.setState({messages});
    }

    /**
     * Sends message to the server through socket.io
     * @param {string} message
     */
    handleSend(message) {
        this.proxy.send(this.state.userName, this.state.chat, message);
    }

    /**
     * Handler for chat's selection from aside
     * @param {string} chat name ot the chat
     */
    handleSelectChat(chat) {
        if (!chat) {
            return;
        }

        this.setState({
            chat,
            messages: []
        });

        this.proxy.getLog(chat, messages => this.setState({messages}));
    }

    render() {
        const {chat, chats, messages} = this.state;

        return (<div className={styles.app}>
            <ChatsList chat={chat} chats={chats} onSelectHandler={this.handleSelectChat}/>
            <Chat chat={chat} messages={messages} onSendHandler={this.handleSend}/>
        </div>);
    }
}

export default App;
