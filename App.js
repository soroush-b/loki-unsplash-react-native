import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import Rounter from './src/app';

const App = () => {
  return (
    <Provider store={store}>
      <Rounter />
    </Provider>
  );
};

export default App;
