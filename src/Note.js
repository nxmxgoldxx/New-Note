import React from "react";

const Note = (props) => { 
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props. note.id;
    props.onType(editMeId, "title", updatedValue);
  }
  
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
 
  
  
  return (
  <li className="note">
    <input
      type="text"
      placeholder="Title"
      className="note__title"
      value={props.note.title}
    />
    <textarea
      placeholder="Description..."
      className="note__description"
      value={props.note.description}
    />
    <span className="note__delete">X</span>
  </li>
  );
};
export default Note;
