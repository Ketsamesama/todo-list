import type {ITask} from 'store';
import {appPath} from 'utils/path';

const path = appPath.map((item => item.path))
const [_, active, completed] = path;

function getActualTodoList(url: string, todos: ITask[] | []) {
  switch (url) {
    case active:
      if (todos.length > 0) {
        todos = todos.filter((todo) => {
          return !todo.isTaskCompleted;
        });
      }
      break;
    case completed:
      if (todos.length > 0) {
        todos = todos.filter((todo) => todo.isTaskCompleted);
      }
      break;
  }
  return todos;
}

function getData() {
  return `${new Date().getDate()} ${
      new Date().getMonth() + 1
  } ${new Date().getFullYear()}`;
}

export { getActualTodoList, getData };
