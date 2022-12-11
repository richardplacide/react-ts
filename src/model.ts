export interface IState {
    todo: string;
    todos: Todo[];
  }

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
