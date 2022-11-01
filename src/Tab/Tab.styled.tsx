import styled from "styled-components";

export const TabWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  width: fit-content;
  padding: 10px;
  border-bottom: none;
  margin-left: 5px;
  margin-right: 5px;
  background: ${(props) => props.color};
  font-family: "Indie Flower";
  &:hover {
    cursor: pointer;
  }
`;
