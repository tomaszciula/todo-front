import * as React from "react";
import { API, INote } from "../data";
import { CloseIconWrapper, NoteWrapper } from "./Note.styled";
import axios from "axios";

const Note: React.FC<INote> = ({ id, title, content }) => {

  const handleNoteDelete = (e: any) => {
    console.log("obiekt :", e);
    console.log(`link: ${API}/delete/${Number(e.target.id)}`);
    axios
      .delete(`${API}/notes/${Number(e.target.id)}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <NoteWrapper>
      <CloseIconWrapper onClick={handleNoteDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          id={String(id)}
        >
          <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
      </CloseIconWrapper>
      <a href="#">
        <h2>{title}</h2>
        <p>{content}</p>
      </a>
    </NoteWrapper>
  );
};

export default Note;
