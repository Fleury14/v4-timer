import React, { useState, useEffect } from 'react';
import './note-taker.scss';

const NoteTaker = (props) => {

  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  function loadNotes() {
    const ls = localStorage.getItem("notes");
    if (ls) setNotes(ls);
  }

  function handleChange(val) {
    localStorage.setItem("notes", notes);
    setNotes(val);
  }

  return (
    <>
      <textarea
        className="notes"
        rows="20"
        value={notes}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default NoteTaker;
