export const API = "http://localhost:8080/api";
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
