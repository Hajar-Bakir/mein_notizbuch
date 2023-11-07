import React from 'react';

const NotizListe = ({ notizen, bearbeiteNotiz, loescheNotiz }) => {
  return (
    <div className="notiz-liste">
      {notizen.map((notiz) => (
        <Notiz
          key={notiz.id}
          notiz={notiz}
          bearbeiteNotiz={bearbeiteNotiz}
          loescheNotiz={loescheNotiz}
        />
      ))}
    </div>
  );
};

export default NotizListe;