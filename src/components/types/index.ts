import { PayloadAction } from '@reduxjs/toolkit';

type ItoggleComplitedActive = (i: number) => void;

interface ITask {
  description: string;
  isTaskCompleted: boolean;
}

type Action = {
  type: string;
  payload?: any;
};

type Dispatch = (arg0: Action, arg2?: PayloadAction<string | number>) => void;

interface IPropsInput {
  input: string;
  dispatch: Dispatch;
  updateInput: (arg0: string) => Action;
  addTodo: () => Action;
}

interface IPropsTodoList {
  todos: ITask[];
  toggleComplitedActive: (i: number) => Action;
  data: string;
  deleteTask: (i: number) => Action;
}

interface IPropsTodoItem {
  i: number;
  todo: ITask;
  deleteTask: (i: number) => Action;
  toggleComplitedActive: (i: number) => Action;
}

export type {
  ItoggleComplitedActive,
  ITask,
  Action,
  IPropsInput,
  IPropsTodoList,
  IPropsTodoItem,
};
