import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'

import throttle from 'lodash/throttle'

import { loadState, saveState } from '../localStorage';

export const persistedState = loadState();

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => {
    saveState(
        {
            "auth": store.getState().auth,
        }
    )
}, 1000));

export default store;



