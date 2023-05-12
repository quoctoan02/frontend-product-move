import { createStore } from 'redux';
import reducer from './reducers/userReducer';

const store = createStore(reducer);

export default store;