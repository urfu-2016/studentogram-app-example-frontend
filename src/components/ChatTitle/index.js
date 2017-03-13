import React, {PropTypes, PureComponent} from 'react';

import styles from './style.css';

/**
 * Just renders title of the chat
 */
export default class ChatTitle extends PureComponent {
    render() {
        const {chat} = this.props;

        if (!chat) {
            return null;
        }

        return (<div className={styles.chatTitle}>{chat}</div>);
    }
}

ChatTitle.propTypes = {
    chat: PropTypes.string
};
