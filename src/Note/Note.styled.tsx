import styled from "styled-components";

export const NotesWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li:nth-child(even) {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #cfc;
  }
  li:nth-child(3n) {
    transform: rotate(-3deg);
    position: relative;
    top: -5px;
    background: #ccf;
  }
  li:nth-child(5n) {
    transform: rotate(5deg);
    position: relative;
    top: -10px;
  }
  li:hover {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
  li:focus {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
  li {
    text-decoration: none;
    color: #000;
    background: #ffc;
    display: block;
    height: 9em;
    width: 9em;
    padding: 1em;
    box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
    transition: transform 0.15s linear;
  }
`;
export const NoteWrapper = styled.li`
  list-style: none;
  text-decoration: none;
  color: #000;
  background: #ffc;
  /* display: block; */
  height: 9em;
  width: 9em;
  padding: 0.5em;
  margin: 1em;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-6deg);
  position: relative;
  overflow: scroll;
  p {
    font-size: 1.6rem;
    font-weight: normal;
  }
  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
  }
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  svg {
    fill: #7339aa;
    position: relative;
    top: -30px;
    right: -30px;
    transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    -webkit-transform: scale(0.5, 0.5);
    cursor: pointer;
  }
`;
export const AddNote = styled.div`
  cursor: pointer;
`;
export const CloseIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  height: 0.2em;
`;
