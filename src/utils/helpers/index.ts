import type { ITask } from 'utils/types';
import { appPath } from 'utils/path';

const [_, active, complited] = appPath;

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
  }
  return todos;
}

function getData() {
  const data = `${new Date().getDate()} ${
    new Date().getMonth() + 1
  } ${new Date().getFullYear()}`;

  return data;
}

export { getActualTodoList, getData };
