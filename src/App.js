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
 // const newNote = [newNote, ...this.state.notes];
    this.setState({ notes: [newNote, ...this.state.notes]})
    
}



  render() {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
