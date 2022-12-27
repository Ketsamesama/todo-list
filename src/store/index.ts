import { makeAutoObservable } from 'mobx';
import { setZiro } from './helpers';

interface ITask {
  description: string;
  isTaskCompleted: boolean;
  dataCreated: number;
}

class TodoStore {
  todos: ITask[] = [];
  input: string = '';
  data: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  getTodoInLocal() {
    const todoLocal = localStorage.getItem('todo');
    if (todoLocal) {
      this.todos = JSON.parse(todoLocal);
    }
  }

  addTodo() {
    if (this.input.trim()) {
      const newTask = {
        description: this.input,
        isTaskCompleted: false,
        dataCreated: Date.now()
      };

      this.todos.unshift(newTask);
      this.input = '';
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
  }

  updateInput(newInputState: string) {
    this.input = newInputState;
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter(item => item.dataCreated !== id);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  setData(currentData: string) {
    let data = currentData.split(' ');
    data = data.map((item) => setZiro(+item));
    this.data = data.join('.');
  }

  toggleComplitedActive(id: number) {
    const todoIndex = this.todos.findIndex(item => item.dataCreated === id)
    this.todos[todoIndex].isTaskCompleted = !this.todos[todoIndex].isTaskCompleted;
    this.input = '';
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}

export default new TodoStore();
export type { ITask }
