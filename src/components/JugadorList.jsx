import { useState, useEffect } from 'react';
import { JugadorCard } from './JugadorCard';
import "./JugadorList.css";

export const JugadorList = ({ actualizarTotal }) => {
  // 1. Creamos los estados requeridos por la guía
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const respuesta = await fetch('https://jugadores.up.railway.app/players');
        if (!respuesta.ok) {
          throw new Error('No se pudo establecer conexión con la API');
        }
        
        const json = await respuesta.json();

        const listaData = json.data; 
        
        setJugadores(listaData);
        actualizarTotal(listaData.length); 
        
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false); 
      }
    };

    consultarAPI();
  }, [actualizarTotal]);

  if (cargando) {
    return (
      <div className="status-container loading-container">
        <div className="spinner"></div>
        <p className="status-text">Cargando el directorio de jugadores...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="status-container error-container">
        <div className="status-icon error-icon">⚠️</div>
        <h2 className="status-title">Ocurrió un error</h2>
        <p className="status-message">{error}</p>
      </div>
    );
  }
  if (jugadores.length === 0) {
    return (
      <div className="status-container empty-container">
        <div className="status-icon empty-icon">⚽</div>
        <h2 className="status-title">No hay jugadores disponibles</h2>
        <p className="status-message">Por favor, intenta recargar la página más tarde.</p>
      </div>
    );
  }

  return (
    <main>
      {jugadores.map((jugador) => (
       
        <JugadorCard key={jugador.id} jugador={jugador} />
      ))}
    </main>
  );
};