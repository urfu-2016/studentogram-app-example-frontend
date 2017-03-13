import React, {PropTypes, Component} from 'react';

import styles from './style.css';

/**
 * Message box with own behaviour
 */
export default class ChatMessageBox extends Component {
    constructor() {
        super(...arguments);

        this.refInput = ref => {
            this._input = ref;
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(e) {
        if (e.key === 'Enter' && this._input.value) {
            this.props.onSendHandler(this._input.value);
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
    onSendHandler: PropTypes.func
};

ChatMessageBox.defaultProps = {
    onSendHandler: () => {}
};

