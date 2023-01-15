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
  text-decoration: none !important;
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
  /* background: #ababab; */
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Indie Flower";
  color: white !important;
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
export const ModalButton = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #ff003b;
      transition: all 0.35s;
    }
    &:hover {
      color: #fff;
    }
    &:hover &:after {
      width: 100%;
    }
  }
  a span {
    position: relative;
    z-index: 2;
  }
`;
export const ModalInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Indie Flower";
  color: ${(props) => props.color || "#ffffff"};
  text-decoration: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid #222fff;
  }
`;
export const ModalInputsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 95%;
height: 50%;
margin-left: auto;
margin-right: auto;
overflow: hidden;
input {
color: #000;

}
`;
export const ModalButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;
