import React, {PropTypes, PureComponent} from 'react';
import {connect} from 'react-redux';

import styles from './style.css';

/**
 * Just renders title of the chat
 */
class ChatTitle extends PureComponent {
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

const mapStateToProps = state => {
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps)(ChatTitle);
