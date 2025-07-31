import React, { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { ESTUDIANTES } from "./utils/Consts";

export const App = () => {
    const [iniState, setIniState] = useState(ESTUDIANTES);
    const [mostrarLista, setMostrarLista] = useState(false);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [editando, setEditando] = useState(null);

    const listar = () => setMostrarLista(!mostrarLista);
    const verRegistro = () => {
      setMostrarForm(!mostrarForm);
      setEditando(null);
    }

    const agregarEstudiante = (estudiante) => {
        if (editando) {
          const actualizado = iniState.map((e) =>
            e.id === estudiante.id ? estudiante : e
          );
          setIniState(actualizado);
          setEditando(null);
        } else {
          const estudianteConId = {
            ...estudiante,
            id: Date.now().toString()
          };
          setIniState([...iniState, estudianteConId]);
        }
        setMostrarForm(false);
    };

    const eliminarEstudiante = (id) => {
      const nuevaLista = iniState.filter(est => est.id !== id);
      setIniState(nuevaLista);
    };

    const editarEstudiante = (estudiante) => {
      setEditando(estudiante);
      setMostrarForm(true);
    }

  return (
    <div className='ini' style={{ display: 'flex', position: 'relative' }}>
      <div className="ingresar" style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px' }}>
          <button 
            onClick={verRegistro} 
            style={{
              padding: '10px 15px',
              backgroundColor: '#007BFF',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
            }}>
            {mostrarForm ? 'Ocultar registro' : 'Ver registro'}
          </button>

          {mostrarForm && <Form onAgregar={agregarEstudiante} datosEditar={editando} />}
        </div>
      </div>

      <div style={{ width: '2px', backgroundColor: 'gray', height: '100vh', position: 'absolute', left: '50%', top: 0 }}></div>

      <div className="ver" style={{ flex: 1, padding: '20px' }}>
        <button 
          onClick={listar} 
          style={{
            padding: '10px 15px',
            backgroundColor: '#28A745',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
          }}>
          {mostrarLista ? 'Ocultar lista' : 'Ver lista'}
        </button>
        {mostrarLista && (
          <List
            stateIni={iniState}
            onEliminar={eliminarEstudiante}
            onEditar={editarEstudiante}
          />
        )}
      </div>
    </div>
  );
};
