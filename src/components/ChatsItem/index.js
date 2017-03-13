import React, {PropTypes} from 'react';

import styles from './style.css';

/**
 * Component for chats list item of aside
 */
export default class ChatsItem extends React.PureComponent {
    render() {
        const {chat, isChatSelected} = this.props;

        return (
            <li
                className={`${styles.item} ${isChatSelected ? styles.itemActive : ''}`}
                onClick={this.props.onClick}
                >
                <span className={styles.name}>
                    {chat.name}
                </span>
            </li>
        );
    }
}

ChatsItem.propTypes = {
    onClick: PropTypes.func,
    chat: PropTypes.object,
    isChatSelected: PropTypes.bool
};

ChatsItem.defaultProps = {
    onClick: () => {},
    chat: {}
};
