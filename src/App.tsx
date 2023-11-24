import { useEffect, useState } from 'react';
import './App.css';
import Example from './components/Example'
import { Note as NoteModel } from './models/note';
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {

    async function loadNote() {
      try {
        const response = await fetch("/api/notes", { method: "GET", });
        const notes = await response.json();
        console.log(notes);
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }

    }
    loadNote();

  }, []);

  return (
    <>
      <Example></Example>
      {notes.map(note => <Note note={note} key={note._id} />

      )}
    </>
  );
}

export default App;
