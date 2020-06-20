import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import fetchMiddleware from './middleware/fetchMiddleware';
import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';
import network from './modules/network/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  bookmarks,
  categories,
  network
});

const persistedReducer = persistReducer(
  persistConfig,
  reducers,
);

const enhancer = compose(applyMiddleware(fetchMiddleware));

export const store = createStore(
  persistedReducer,
  enhancer,
);

export const persistor = persistStore(store);
