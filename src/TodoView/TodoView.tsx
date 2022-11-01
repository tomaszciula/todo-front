import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { API, Category, ITodo } from "../data";
import Todo from "../Todo/Todo";
import {
  Button,
  Select,
  Option,
  TodoViewWrapper,
  AddTodoWrapper,
} from "./TodoView.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { TodoText, TodoWrapper } from "../Todo/Todo.styled";

interface ITodoView {
  activeTab: string;
  setActiveTab: Function;
}

type Inputs = {
  done: boolean;
  text: string;
  important: Category;
};

const TodoView: FC<ITodoView> = ({ activeTab, setActiveTab }) => {
  const [todos, setTodos] = useState<ITodo[]>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.done = false;
    axios
      .post(`${API}/todos`, data)
      .then(function (response) {
        console.log(response);
        //TODO: setTodos(todos.push(data));
      })
      .catch(function (error) {
        console.log(error);
      });
    setActiveTab("must");
  };

  useEffect(() => {
    axios
      .get(`${API}/todos`)
      .then(function (response) {
        setTodos(response.data);
        console.log("Axios respone: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/todos`)
      .then(function (response) {
        setTodos(response.data);
        console.log("Axios respone: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [activeTab]);

  return activeTab === "must" ? (
    <TodoViewWrapper color="#882D60">
      {todos &&
        todos.map((item) =>
          item.important === Category.must ? (
            <Todo
              id={item.id}
              key={item.text}
              done={item.done}
              text={item.text}
              important={item.important}
              todos={todos}
              setTodos={setTodos}
            />
          ) : null
        )}
    </TodoViewWrapper>
  ) : activeTab === "should" ? (
    <TodoViewWrapper color="#AA3939">
      {todos &&
        todos.map((item) =>
          item.important === Category.should ? (
            <Todo
              id={item.id}
              key={item.text}
              done={item.done}
              text={item.text}
              important={item.important}
              todos={todos}
              setTodos={setTodos}
            />
          ) : null
        )}
    </TodoViewWrapper>
  ) : activeTab === "maybe" ? (
    <TodoViewWrapper color="#AA6C39">
      {todos &&
        todos.map((item) =>
          item.important === Category.maybe ? (
            <Todo
              id={item.id}
              key={item.text}
              done={item.done}
              text={item.text}
              important={item.important}
              todos={todos}
              setTodos={setTodos}
            />
          ) : null
        )}
    </TodoViewWrapper>
  ) : activeTab === "add" ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TodoViewWrapper color="#AA3939">
        <AddTodoWrapper>
          <TodoText textDecoration={"none"} {...register("text")} />
          <Select id="important" {...register("important")}>
            <Option value={0}>must</Option>
            <Option value={1}>should</Option>
            <Option value={2}>maybe</Option>
          </Select>
        </AddTodoWrapper>
        <Button>Dodaj</Button>
      </TodoViewWrapper>
    </form>
  ) : null;
};

export default TodoView;
