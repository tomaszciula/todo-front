import styled, { StyleSheetManager } from "styled-components";
import { TodoWrapper } from "../Todo/Todo.styled";

export const TodoViewWrapper = styled.div`
  background: ${(props) => props.color};
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  font-family: sans-serif;
  text-decoration: none;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;

  &:hover {
    color: #ce3b3b;
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }

  margin-top: 30px;
  background: #ababab;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Indie Flower";
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export const AddTodoWrapper = styled(TodoWrapper)`
  display: flex;
  justify-content: center;
`;
export const Select = styled.select`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  font-family: "Indie Flower";
  font-size: 25px;
  background: transparent;
  outline: none;
  border: none;
  color: white;
`;

export const Option = styled.option``;
