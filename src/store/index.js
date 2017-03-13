/* global window */

import {createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducers/index.js';
import serverMw from '../middlewares/serverMw.js';

import initialState from './initialState.js';

const createStoreWithMiddlewares = compose(
    applyMiddleware(serverMw),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

export default createStoreWithMiddlewares(
    reducer,
    initialState
);
