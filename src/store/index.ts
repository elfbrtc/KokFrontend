// store/index.js
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers'; // Root reducer'i eklemelisiniz

const store = createStore(rootReducer);

export default store;
