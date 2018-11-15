import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducer.js';


import './index.css';
import App from './container/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({ searchRobots, requestRobots })
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
