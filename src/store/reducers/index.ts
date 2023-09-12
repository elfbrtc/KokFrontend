// store/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Örnek bir reducer

const rootReducer = combineReducers({
  counter: counterReducer,
  // Diğer reducer'ları burada ekleyebilirsiniz
});

export default rootReducer;
