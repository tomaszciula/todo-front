export const API = "https://wheelo.byst.re/todo-0.0.1-SNAPSHOT";
export interface ITodo {
  id: number;
  done: boolean;
  text: string;
  important: Category;
  todos: ITodo[];
  setTodos: Function;
}
[];

export interface IState {
  activeTab: string;
}

export enum Category {
  must,
  should,
  maybe,
}
