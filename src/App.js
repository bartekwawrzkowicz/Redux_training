import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="store">
        <h1>learning Redux</h1>
        <p>Zacznijmy kodować</p>
      </div>
    </Provider>
  );
}

export default App;
