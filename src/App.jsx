import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { JugadorList } from './components/JugadorList';
import { Footer } from './components/Footer';

function App() {

  const [totalJugadores, setTotalJugadores] = useState(0);
    return (
      <>
      <div className="app-wrapper">
        <Navbar totalJugadores={totalJugadores} />
      
        <Header />
      
        <JugadorList actualizarTotal={setTotalJugadores} />
      
        <Footer />
      </div>
     </>
   );
}

export default App;