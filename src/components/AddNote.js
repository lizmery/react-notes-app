import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteData, setNoteData] = useState({title: "", text: ""});
    const characterLimit = 200;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNoteData(prevNoteData => ({...prevNoteData, [name]: value}));
    };

    const handleSaveClick = () => {
        if (noteData.title.trim().length > 0 && noteData.text.trim().length > 0) {
            handleAddNote(noteData.title, noteData.text);
            setNoteData({title: "", text: ""});
        }
    };

    return (
        <div className='note new'>
            <input
                name="title"
                value={noteData.title}
                onChange={handleChange}
                placeholder='Add title...'
            />
            <textarea 
                maxLength={characterLimit}
                rows='8' 
                cols='10' 
                name="text"
                placeholder='Type to add a new note...'
                value={noteData.text}
                onChange={handleChange}
            />
            <div className='note-footer'>
                <small>{characterLimit - noteData.text.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;