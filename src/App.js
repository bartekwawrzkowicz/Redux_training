import { Provider } from 'react-redux';

import Form from './Form';
import List from './List';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="store">
        <Form />
        <h1>Redux</h1>
        <List />
      </div>
    </Provider>
  );
}

export default App;
