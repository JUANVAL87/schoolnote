import React, { useState, useEffect } from 'react';

export const Form = ({ onAgregar, datosEditar }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    edad: '',
    carrera: '',
    promedio: '',
    id: null
  });

  useEffect(() => {
    if (datosEditar) {
      setFormulario(datosEditar);
    }
  }, [datosEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(formulario);
    setFormulario({ nombre: '', edad: '', carrera: '', promedio: '', id: null });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid black',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '300px'
        }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Nombre completo:</label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Edad:</label>
          <input
            type="number"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
            min="16"
            max="60"
            required/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Carrera:</label>
          <input
            type="text"
            name="carrera"
            value={formulario.carrera}
            onChange={handleChange}
            required/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Promedio:</label>
          <input
            type="number"
            name="promedio"
            value={formulario.promedio}
            onChange={handleChange}
            min="0"
            max="5"
            required
          />
        </div>

        <button 
          type="submit" 
          style={{
            padding: '6px',
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
          }}>
          {datosEditar ? 'Actualizar' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};