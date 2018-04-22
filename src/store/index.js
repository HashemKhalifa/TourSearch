import { createStore } from 'redux';
import initialState from './initial-state';

import routeReducer from './reducers';

export default createStore(routeReducer, initialState);
