import React from "react";
import { useState } from "react";
import Form from "./form";

const fromout = ({ notes, deleteNote }) => {
  return (
    <div className="text-white w-1/2 border-2 border-gray-200 rounded-2xl p-4 shadow-2xl">
      <div className="flex items-center justify-center text-white w-full">
        <h1 className="border-2 border-blue-800 rounded-2xl p-2">
          Recent Notes
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center overflow-y-scroll h-[85vh] scrollbar-hide">
        {notes.length === 0 ? (
          <p className="text-gray-400 mt-8">
            No notes yet. Add one to get started!
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="w-60 bg-white rounded-4xl relative flex flex-col p-4 justify-between shadow-lg h-60"
            >
              <div className="text-black">
                <h2 className="font-bold text-lg mb-2">{note.note}</h2>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {note.description}
                </p>
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 w-full mt-4"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default fromout;
