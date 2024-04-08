import React, {useState} from 'react';

function DateComponent() {
    const [actions, setActions] = useState([]);
    const [notes, setNotes] = useState([]);
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [currentNote, setCurrentNote] = useState('');

    const loadAction = () => {
        // 플레이스 정보 불러오기
        const newAction = `Action at ${new Date().toLocaleTimeString()}`;
        setActions(prevActions => [...prevActions, newAction]);
    };

    const saveNote = () => {
        if (!currentNote.trim()) return;
        setNotes(prevNotes => [...prevNotes, currentNote]);
        setCurrentNote('');
        setShowNoteInput(false);
    };

    const handleNoteInputChange = (e) => {
        setCurrentNote(e.target.value);
    };

    const deleteNote = (index) => {
        setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
    }

    return (
        <div>
          <button onClick={loadAction}>장소 추가</button>
          <button onClick={() => setShowNoteInput(true)}>메모 추가</button>
          {showNoteInput && (
            <div>
                <input 
                type = "text"
                value={currentNote}
                onChange={handleNoteInputChange}
                placeholder="메모를 입력하세요"
                />
                <button onClick={saveNote}>메모 저장</button>
            </div>
          )}
          <div>
            <h3>장소 추가:</h3>
            <ul>
              {actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
            <h3>메모 추가:</h3>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>{note}<button on onClick={() => deleteNote(index)}>삭제</button></li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    export default DateComponent;