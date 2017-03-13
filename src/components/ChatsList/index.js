/* eslint react/jsx-no-bind: 0 */

import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectChat} from '../../actions/chats.js';

import ChatsItem from '../ChatsItem';

import styles from './style.css';

/**
 * List of the all chats
 */
class ChatsList extends PureComponent {
    constructor() {
        super(...arguments);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        const {chat, selectChat} = this.props;

        if (name && chat !== name) {
            selectChat(name);
        }
    }

    render() {
        const {chat, chats} = this.props;

        return (<ul className={styles.list}>
            {
                chats.map((name, i) =>
                    <ChatsItem
                        key={i}
                        chat={{id: i, name}}
                        isChatSelected={name === chat}
                        onClick={() => this.handleClick(name)}
                        />
                )
            }
        </ul>);
    }
}

ChatsList.propTypes = {
    chat: PropTypes.string,
    chats: PropTypes.array,
    selectChat: PropTypes.func
};

ChatsList.defaultProps = {
    chats: []
};

const mapStateToProps = state => {
    return {
        chat: state.chat,
        chats: state.chats
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectChat: payload => {
            dispatch(selectChat(payload));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);
