import React from 'react';
import { Card } from './Card';

export const List = ({ stateIni, onEliminar, onEditar }) => {
  const promedioGrupo = () => {
    const cantidad = stateIni.length;
    if (cantidad === 0) return 0;
    const suma = stateIni.reduce((acc, est) => acc + Number(est.promedio), 0);
    return Math.round((suma / cantidad) * 100) / 100;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', flexGrow: 1, maxWidth: 'calc(100% - 120px)' }}>
        {stateIni.map((info) => (
          <div key={info.id} style={{ textAlign: 'center' }}>
            <Card estudiante={info} />
            <button 
              onClick={() => onEditar(info)} 
              style={{
                padding: '10px',
                backgroundColor: '#007BFF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                marginRight: '10px',
              }}>
              Editar
            </button>
            <button 
              onClick={() => onEliminar(info.id)} 
              style={{
                padding: '10px',
                backgroundColor: '#DC3545',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
              }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>


      <div style={{
        position: 'fixed',
        right: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '4px solid black',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
      }}>
        {promedioGrupo()}
      </div>
    </div>
  );
};
