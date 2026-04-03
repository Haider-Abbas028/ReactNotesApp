import React from "react";
import { useState } from "react";
const form = ({ addNote }) => {
  const [note, setNote] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (note.trim() || description.trim()) {
      addNote({ note, description });
      setNote("");
      setDescription("");
    }
  };

  return (
    <div className="text-white w-1/2">
      <div className="flex justify-center">
        <h1 className="p-2 border-2 border-blue-800 rounded-2xl">Notes App</h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 items-start w-[95%]"
      >
        <div className="flex items-center gap-4 w-full">
          <label htmlFor="note">Title:</label>
          <input
            type="text"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter Notes Title"
            className="outline-none border-2 w-full border-gray-200 rounded p-2 mt-2 text-white "
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Notes Description"
            className="outline-none border-2 border-gray-200 rounded text-white h-30 w-full
            p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default form;
