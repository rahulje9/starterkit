// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../ducks/auth';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // stateReconciler: hardSet,

}

const persistedReducer = persistReducer(persistConfig, authReducer)


// const store = createStore(authReducer, compose(applyMiddleware(thunkMiddleware)))


let store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)))
let persistor = persistStore(store)
export default { store, persistor }

// export default store;