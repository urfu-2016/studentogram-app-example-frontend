import React, {PureComponent, PropTypes} from 'react';

import ChatTitle from '../ChatTitle';
import ChatStream from '../ChatStream';
import ChatMessageBox from '../ChatMessageBox';

import styles from './style.css';

/**
 * Implements right side of the Application: chat with title and message box
 */
export default class Chat extends PureComponent {
    render() {
        const {chat, messages, onSendHandler} = this.props;

        return (
            <div className={styles.chat}>
                <ChatTitle chat={chat}/>
                <ChatStream messages={messages}/>
                <ChatMessageBox onSendHandler={onSendHandler}/>
            </div>
        );
    }
}

Chat.propTypes = {
    chat: PropTypes.string,
    messages: PropTypes.array,
    onSendHandler: PropTypes.func
};
