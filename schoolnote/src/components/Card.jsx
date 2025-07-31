import React from 'react';

export const Card = ({ estudiante }) => {
  return (
    <div style={{ border: '1px solid black', width: '250px', margin: '10px', padding: '5px' }}>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="imagen" style={{ width: '100%', height: 'auto', maxWidth: '600px', maxHeight: '600px' }} />
      </div>

      <div>
        <p><strong>Nombre:</strong> {estudiante.nombre}</p>
        <p><strong>Edad:</strong> {estudiante.edad}</p>
        <p><strong>Carrera:</strong> {estudiante.carrera}</p>
        <p><strong>Promedio:</strong> {estudiante.promedio}</p>
      </div>
    </div>
  );
};
