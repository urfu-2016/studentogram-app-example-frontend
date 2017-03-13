/* eslint react/jsx-no-bind: 0 */

import React, {PureComponent, PropTypes} from 'react';

import ChatsItem from '../ChatsItem';

import styles from './style.css';

/**
 * List of the all chats
 */
export default class ChatsList extends PureComponent {
    constructor() {
        super(...arguments);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        const {chat, onSelectHandler} = this.props;

        if (name && chat !== name) {
            onSelectHandler(name);
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
    onSelectHandler: PropTypes.func
};

ChatsList.defaultProps = {
    chats: [],
    onSelectHandler: () => {}
};
