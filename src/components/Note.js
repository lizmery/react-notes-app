import { MdEdit, MdDeleteForever } from 'react-icons/md';

const Note = ({id, title, text, date, handleDeleteNote, handleEditNote}) => {
    return (
        <div className='note'>
            <h3 className='note-title'>{title}</h3>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <div className="icons">
                    <MdEdit 
                        className="edit-icon"
                        onClick={() => handleEditNote(id, title, text)}
                    />
                    <MdDeleteForever 
                        onClick={() => handleDeleteNote(id)}
                        className='delete-icon' 
                        size='1.3em' 
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;