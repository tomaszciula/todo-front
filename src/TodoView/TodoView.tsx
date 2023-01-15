import axios from "axios";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { API, Category, INote, ITodo } from "../data";
import Todo from "../Todo/Todo";
import {
  Button,
  Select,
  Option,
  TodoViewWrapper,
  AddTodoWrapper,
  ModalButton,
  ModalInput,
  ModalInputsWrapper,
  ModalButtonsWrapper,
} from "./TodoView.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { TodoText, TodoWrapper } from "../Todo/Todo.styled";
import { AddNote, NotesWrapper } from "../Note/Note.styled";
import Note from "../Note/Note";
import addIcon from "../assets/add_circle_FILL0_wght400_GRAD0_opsz48.svg";
// @ts-ignore
import Modal from "react-modal";

interface ITodoView {
  activeTab: string;
  setActiveTab: Function;
}

type Inputs = {
  done: boolean;
  text: string;
  important: Category;
};
// type INote = {
//   title: string;
//   content: string;
// }
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "50%",
    textAlign: "center",
    background: "#ccf",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
// Modal.setAppElement('#yourAppElement');

const TodoView: FC<ITodoView> = ({ activeTab, setActiveTab }) => {
  const [todos, setTodos] = useState<ITodo[]>();
  const [notes, setNotes] = useState<INote[]>();
  const [note, setNote] = useState<INote>({
    id: 0,
    title: "",
    content: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleNoteSubmit = () => {
    console.log("form data: ", note);
    axios
      .post(`${API}/notes`, note)
      .then(function (response) {
        console.log(response);
        setIsOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("value: ", e.target.value);
    console.log("name: ", e.target.name);
    
    
    const value = e.target.value;
    setNote({ ...note, [e.target.name]: value });
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
      .get(`${API}/notes`)
      .then(function (response) {
        setNotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then(function (response) {
        setNotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [activeTab]);

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

  const handleAddNote = () => {
    setIsOpen(true);
  };

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
  ) : activeTab === "notes" ? (
    <TodoViewWrapper color="#7339aa" style={{ height: "100vh", overflow: "scroll"}}>
      <AddNote style={{ fill: "#fff" }} onClick={handleAddNote}>
        {/* <img src={addIcon} style={{ fill: "#fff" }}/> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
        </svg>
      </AddNote>
      <NotesWrapper>
        {notes &&
          notes.map((item) => (
            <Note id={item.id} title={item.title} content={item.content} />
          ))}
      </NotesWrapper>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <ModalInputsWrapper>
          <ModalInput
            placeholder="Add title"
            value={note.title}
            onChange={handleInputChange}
            name="title"
          />
          <ModalInput
            placeholder="Add note"
            value={note.content}
            onChange={handleInputChange}
            name="content"
          />
        </ModalInputsWrapper>
        <ModalButtonsWrapper>
          <Button style={{ margin: "10%", textDecoration: "none" }} onClick={handleNoteSubmit}>
            <a href="#">
              <span>Save</span>
            </a>
          </Button>
          <Button style={{ margin: "10%", textDecoration: "none" }} onClick={() => setIsOpen(false)}>
            <a href="#">
              <span>Cancel</span>
            </a>
          </Button>
        </ModalButtonsWrapper>
      </Modal>
    </TodoViewWrapper>
  ) : null;
};

export default TodoView;
