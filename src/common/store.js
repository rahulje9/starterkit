import { createStore } from 'redux';
import authReducer from '../ducks/auth';

const store = createStore(authReducer)

export default store;