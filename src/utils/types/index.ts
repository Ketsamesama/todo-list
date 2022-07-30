import { PayloadAction } from '@reduxjs/toolkit';

type ItoggleComplitedActive = (i: number) => void;

type Action = {
  type: string;
  payload?: any;
};

type Dispatch = (arg0: Action, arg2?: PayloadAction<string | number>) => void;

interface ITask {
  description: string;
  isTaskCompleted: boolean;
}

interface IPropsInput {
  input: string;
  dispatch: Dispatch;
  updateInput: (arg0: string) => Action;
  addTodo: () => Action;
  showHideInput: (state: boolean) => void;
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

interface IPrposHeader {
  data: string;
}

interface IPropsBtn {
  showHideInput: (state: boolean) => void;
}

export type {
  ItoggleComplitedActive,
  ITask,
  Action,
  IPropsInput,
  IPropsTodoList,
  IPropsTodoItem,
  IPrposHeader,
  IPropsBtn,
};
