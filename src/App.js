import "./App.scss";
import TodoListContainer from "./components/TodoList/TodoListContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <TodoListContainer /> 
    </div>
  );
}

export default App;
