import type { ITask } from 'utils/types';
import { appPath } from 'utils/path';

const [active, complited] = appPath;

function getActualTodoList(url: string, todos: ITask[] | []) {
  switch (url) {
    case active:
      if (todos.length > 0) {
        todos = todos.filter((todo) => {
          return !todo.isTaskCompleted;
        });
      }
      break;
    case complited:
      if (todos.length > 0) {
        todos = todos.filter((todo) => todo.isTaskCompleted);
      }
      break;
    default:
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
