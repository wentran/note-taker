import React, {Component} from 'react';
import {initStore} from './app/redux/store';
import {Provider} from 'react-redux';

import AppContainer from './App.container';

const store = initStore();

export default function App() {
  return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>

  );
}
