import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import TodoListContainer from '../components/TodoList/TodoListContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import store from 'store';

import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Sidebar />
          <TodoListContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
