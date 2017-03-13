import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import {sendMessage} from '../../actions/server.js';

import styles from './style.css';

/**
 * Message box with own behaviour
 */
class ChatMessageBox extends Component {
    constructor() {
        super(...arguments);

        this.refInput = ref => {
            this._input = ref;
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(e) {
        if (e.key === 'Enter' && this._input.value) {
            const {send, author, chat} = this.props;

            send({author, chat, message: this._input.value});
            this._input.value = '';
        }
    }

    render() {
        return (<div>
            <input
                type="text"
                className={styles.chatInput}
                ref={this.refInput}
                onKeyUp={this.handleKeyUp}
                placeholder="Type text message here"
                />
        </div>);
    }
}

ChatMessageBox.propTypes = {
    send: PropTypes.func,
    author: PropTypes.string,
    chat: PropTypes.string
};

const mapStateToProps = state => {
    return {
        author: state.userName,
        chat: state.chat
    };
};

const mapDispatchToProps = dispatch => {
    return {
        send: ({author, chat, message}) => dispatch(sendMessage(author, chat, message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageBox);
