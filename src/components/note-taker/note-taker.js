import React, { useState, useEffect } from 'react';
import { Shops, Items } from '../../data/note-data';
import './note-taker.scss';

const NoteTaker = (props) => {

  const [notes, setNotes] = useState('');
  const [allowTyping, setTyping] = useState(false);
  const [confirmed, confirmReset] = useState(false);

  useEffect(() => {
    loadNotes();
    const storedAllow = localStorage.getItem('allowTyping');
    if (storedAllow === "true") setTyping(true);
  }, []);


  function loadNotes() {
    const ls = localStorage.getItem("notes");
    if (ls) setNotes(ls);
  }


  function handleChange(val) {
    localStorage.setItem("notes", notes);
    setNotes(val);
  }

  function toggleTyping() {
    setTyping(!allowTyping);
    localStorage.setItem("allowTyping", !allowTyping)
  }

  function addItem(val) {
    handleChange(notes + " " + val);
  }

  function handleReset() {
    if (!confirmed) {
      confirmReset(true)
    } else {
      localStorage.setItem("notes", "");
      setNotes("");
      confirmReset(false);
    }
  }

  return (
    <>
      <textarea
        className="notes"
        rows="10"
        value={notes}
        onChange={(e) => {
          if (allowTyping) handleChange(e.target.value)
          }}
      />
      <div className="note-col">
        <div className="note-button-col">
          {Shops.map((shop, index) => {
          return index % 2 === 0 ? <button key={shop} onClick={() => addItem(shop)}>{shop}</button> : null;
          })}
        </div>
        <div className="note-button-col">
          {Shops.map((shop, index) => {
          return index % 2 === 1 ? <button key={shop} onClick={() => addItem(shop)}>{shop}</button> : null;
          })}
        </div>
        <div className="note-button-col">
          {Items.map((item, index) => {
          return index % 2 === 0 ? <button key={item} onClick={() => addItem(item)}>{item}</button> : null;
          })}
        </div>
        <div className="note-button-col">
          {Items.map((item, index) => {
          return index % 2 === 1 ? <button key={item} onClick={() => addItem(item)}>{item}</button> : null;
          })}
        </div>
      </div>
      <div>
        <div className="type-row">
          <input type="checkbox" checked={allowTyping} onChange={() => toggleTyping()}/>
          <p>Enable Typing</p>          
        </div>
        <p className="warning">Warning: Enabling typing will disable the keybinds for the boss timer and main timer start/stop to avoid accidents.</p>
        <div className="bottom-button-row">
          <button onClick={() => handleReset()}>{!confirmed ? "Reset" : "Are you sure?"}</button>
          <button onClick={() => addItem(String.fromCharCode(13, 10))}>New Line</button>
        </div>
        
      </div>
    </>
  );
}

export default NoteTaker;
