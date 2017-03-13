import React, {PropTypes, PureComponent} from 'react';
import {connect} from 'react-redux';

import styles from './style.css';

/**
 * Implements message's stream of some chat
 */
class ChatStream extends PureComponent {
    render() {
        const {messages} = this.props;

        if (!messages.length) {
            return (<div className={styles.chatBodyWrapper}>
                <div className={styles.chatBody}>
                    <div className={styles.chatEmpty}>You have no any messages in this chat</div>
                </div>
            </div>);
        }

        return (
            <div className={styles.chatBodyWrapper}>
                <div className={styles.chatBody}>
                    {
                        messages.map((item, i) =>
                            <div key={i} className={styles.chatMessageItem}>
                                <span className={styles.chatMessageAuthor}>{item.author}</span>
                                <span className={styles.chatMessageContent}>{item.message}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

ChatStream.propTypes = {
    messages: PropTypes.array
};

ChatStream.defaultProps = {
    messages: []
};

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(ChatStream);
