import React, {PureComponent} from 'react';

import ChatTitle from '../ChatTitle';
import ChatStream from '../ChatStream';
import ChatMessageBox from '../ChatMessageBox';

import styles from './style.css';

/**
 * Implements right side of the Application: chat with title and message box
 */
export default class Chat extends PureComponent {
    render() {
        return (
            <div className={styles.chat}>
                <ChatTitle/>
                <ChatStream/>
                <ChatMessageBox/>
            </div>
        );
    }
}

