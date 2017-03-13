import React from 'react';

import styles from './style.css';

import ChatsList from '../ChatsList';
import Chat from '../Chat';

/**
 * Main component for out Studentogram chat
 */
class App extends React.Component {
    render() {
        return (<div className={styles.app}>
            <ChatsList/>
            <Chat/>
        </div>);
    }
}

export default App;
