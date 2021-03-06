import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import persistedReducer from './persist';

import reducers from './ducks';

const store = createStore(persistedReducer(reducers), applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
