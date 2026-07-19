export const JugadorCard = ({ jugador }) => {
  const { name, age, birthDate, currentClub, nationalTeam, position, number, photoUrl } = jugador;
  
  const imagenSegura = photoUrl ? photoUrl : "https://via.placeholder.com/150?text=Sin+Imagen";

  return (
    <article>
      
      <img src={imagenSegura} alt={`Fotografia de ${name}`} />
      <div className="title-box">
        <h3>{name}</h3>
      </div>
      <div className="info-box">
      <p><strong>Seleccion Nacional:</strong> {nationalTeam}</p>
      <p><strong>Club Actual:</strong> {currentClub}</p>
      <p><strong>Posición:</strong> {position}</p>
      <p><strong>Dorsal:</strong> {number}</p>
      <p><strong>Edad:</strong> {age} años (Nacimiento: {birthDate})</p>
      </div>
    </article>
    
  );
};