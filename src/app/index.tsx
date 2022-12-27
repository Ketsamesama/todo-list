import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import TodoListContainer from 'components/TodoList/TodoListContainer';
import Sidebar from 'components/Sidebar/Sidebar';

import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
        <div className="app">
          <Sidebar />
          <TodoListContainer />
        </div>
    </BrowserRouter>
  );
};

export default App;
