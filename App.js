/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './src/common/route';
import Store from './src/common/store';


const App: () => React$Node = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate persistor={Store.persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
