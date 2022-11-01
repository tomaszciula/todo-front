import React, { FC, FormEvent, useState } from "react";
import { API, ITodo } from "../data";
import {
  CheckboxWrapper,
  DeleteIconWrapper,
  TodoText,
  TodoWrapper,
} from "./Todo.styled";
import { ReactComponent as DeleteIcon } from "../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Checkbox_filled } from "../assets/check_box_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Checkbox_outline } from "../assets/check_box_outline_blank_FILL0_wght400_GRAD0_opsz48.svg";
import axios from "axios";

const Todo: FC<ITodo> = ({ id, done, text, important, todos, setTodos }) => {
  const [inputText, setInputText] = useState<string>(text);

  const handleCheckboxChange = (event: HTMLDivElement) => {
    const index = todos.findIndex((item) => item.id === id);
    done = !done;
    setTodos([...todos], (todos[index].done = done));
    axios
      .put(`${API}/todos/${id}`, {
        done: done,
        text: inputText,
        important: important,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTextChange = (e: FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleDeleteTodo = () => {
    console.log("id: ", id);
    axios
      .delete(`${API}/todos/${id}`)
      .then(function (response) {
        console.log(response);
        const index = todos.findIndex((item) => item.id === id);
        const newTodos = todos.filter(function (value) {
          return value.id != id;
        });
        setTodos(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBlur = () => {
    axios
      .put(`${API}/todos/${id}`, {
        done: done,
        text: inputText,
        important: important,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TodoWrapper id={`${id}`}>
      <CheckboxWrapper>
        {done ? (
          <Checkbox_filled id={id} onClick={handleCheckboxChange} />
        ) : (
          <Checkbox_outline id={id} onClick={handleCheckboxChange} />
        )}
      </CheckboxWrapper>
      <TodoText
        type="text"
        value={inputText}
        onChange={handleTextChange}
        onBlur={handleBlur}
        textDecoration={done ? "line-through" : "normal"}
        placeholder="Dodaj todo ..."
      />
      <DeleteIconWrapper>
        <DeleteIcon onClick={handleDeleteTodo} />
      </DeleteIconWrapper>
    </TodoWrapper>
  );
};

export default Todo;
