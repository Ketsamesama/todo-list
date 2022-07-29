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
    default:
      break;

      // я думаю здесь можно сделать просто два условия через if, либо что-то придумать с default а то
      // получается ты его оъявил но по вакту не используешь
  }
  return todos;
}

function getData() {
  return `${new Date().getDate()} ${
    new Date().getMonth() + 1
  } ${new Date().getFullYear()}`;

  // вынеси все выражения в константы
}

export { getActualTodoList, getData };
