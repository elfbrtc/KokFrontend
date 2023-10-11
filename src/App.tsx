import { useEffect, useState } from 'react';
import './App.css';
import Example from './components/Example'
import { Note } from './models/note';

function App() {

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(()=>{

    async function loadNote(){
      try {
        const response = await fetch("/api/notes", {method: "GET"});
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
      
    }
    loadNote();

  },[]);

  return (
    <>
    <Example></Example>
    {JSON.stringify(notes)}
    </>
  );
}

export default App;
