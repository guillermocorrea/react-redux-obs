import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import stories from './reducers';
import users from './reducers/users';
import registerServiceWorker from './registerServiceWorker';
import { combineEpics } from 'redux-observable';
import { loadStoriesEpic } from './epics';
import { fetchUserEpic } from './epics/users';
import { createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(loadStoriesEpic, fetchUserEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        stories,
        users
    }),
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
