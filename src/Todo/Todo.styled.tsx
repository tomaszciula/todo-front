import styled from "styled-components";

interface IInput {
  textDecoration?: string;
  color?: string;
}

export const TodoWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 5px;
  margin: 5px;
  font-family: "Indie Flower";
`;

export const CheckboxWrapper = styled.div`
  width: auto;
  height: 6px;
  fill: #fff;
`;

export const TodoText = styled.input<IInput>`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Indie Flower";
  color: ${(props) => props.color || "#ffffff"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  &:focus {
    outline: none;
    border-bottom: 1px solid #222fff;
  }
`;

export const DeleteIconWrapper = styled.div`
  cursor: pointer;
  fill: #fff;
  width: auto;
  height: 6px;
`;
