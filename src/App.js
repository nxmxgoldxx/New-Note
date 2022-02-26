import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class App extends Component {
  state = {
    notes: [
      {
    id: Date.now(),
    title: "",
    description: "",
    doesMatchSearch: true,
      },
    ],
    searchText: "",
  };

  addNote = () => {
    // create a new note object
const newNote = {
  id: Date.now(),
  title: "",
  description: "",
  doesMatchSearch: true,
};
    // add the new note to the existing notes array in State
    const newNote = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });  
};

onType = (editMeId, updatedKey, updatedValue) => {
// editable id note
//updatedKey == title or description 
//updated value == value of title or description
const updatedNotes = this.state.notes.map( note => {
  if (note.id !== editMeId) {
    return note;
  } else {
    if (updatedKey === "title"){
      note.title = updatedValue;
      return note;
    }
  }
});
this.setState({ notes: updatedNotes });
};


  render() {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList onType = {this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
