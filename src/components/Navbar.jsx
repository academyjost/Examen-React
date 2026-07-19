export const Navbar = ({ totalJugadores }) => {
  return (
    <nav className="navbar-container">
      <h2>Catálogo FC</h2>
      <div className="counter-box">
        <p>Total: {totalJugadores}</p>
      </div>
    </nav>
  );
};