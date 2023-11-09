import React, { useState } from 'react';

const NeueNotizFormular = ({ hinzufuegenNotiz }) => {
  const [titel, setTitel] = useState('');
  const [inhalt, setInhalt] = useState('');

  const handleTitelChange = (e) => {
    setTitel(e.target.value);
  };

  const handleInhaltChange = (e) => {
    setInhalt(e.target.value);
  };

  const handleNeueNotiz = () => {
    if (titel && inhalt) {
      const erstellungsdatum = new Date().toLocaleString();
      hinzufuegenNotiz({ id: Date.now(), title: titel, content: inhalt, erstellungsdatum });
      setTitel('');
      setInhalt('');
    }
  };

  return (
    <div className='new-note'>
      <h2>Neue Notiz erstellen</h2>
      <label className='title' for="title-input">Titel:</label>
      <input className='title-input' type="text" value={titel} onChange={handleTitelChange} />
      <label className='content' for="content-input">Inhalt:</label>
      <textarea className='content-input' value={inhalt} onChange={handleInhaltChange} />
      <button className='create-button' onClick={handleNeueNotiz}>Notiz erstellen</button>
    </div>
  );
};

export default NeueNotizFormular;
