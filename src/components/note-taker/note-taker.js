import React, { useState } from 'react';
import './note-taker.scss';

const NoteTaker = (props) => {

  const [notes, setNotes] = useState('');

  return (
    <>
      <textarea
        className="notes"
        rows="20"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </>
  );
}

export default NoteTaker;
