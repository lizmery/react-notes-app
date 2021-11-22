import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";


const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
          <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
          <SearchBar handleSearchNote={setSearchText} />
          <NotesList 
            notes={notes.filter((note) => 
              note.title.toLowerCase().includes(searchText) || note.text.toLowerCase().includes(searchText)
            )} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
      </div>
    </div>
  );
};

export default App;