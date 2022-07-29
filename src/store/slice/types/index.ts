interface ITask {
  description: string;
  isTaskCompleted: boolean;
}

interface IState {
  todos: ITask[];
  input: string;
  data: string;
}

export type { IState };
