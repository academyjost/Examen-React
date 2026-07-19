import { useState, useEffect } from 'react';
import { JugadorCard } from './JugadorCard';

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

  if (cargando) return <h2>Cargando directorio de jugadores...</h2>;
  if (error) return <h2>Ocurrió un error: {error}</h2>;
  if (jugadores.length === 0) return <h2>No hay jugadores disponibles.</h2>;

  return (
    <main>
      {jugadores.map((jugador) => (
       
        <JugadorCard key={jugador.id} jugador={jugador} />
      ))}
    </main>
  );
};