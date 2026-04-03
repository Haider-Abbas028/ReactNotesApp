import React, { useState } from "react";
import Form from "./form";
import Fromout from "./fromout";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-gray-800 w-full h-screen flex gap-20 justify-between px-6 py-2 font-medium ">
      <Form addNote={addNote} />
      <Fromout notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
