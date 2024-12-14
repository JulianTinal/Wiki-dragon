import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonajesSuperComponent from './components/PersonajesSuperComponent/PersonajesSuperComponent';
import PersonajesZComponent from './components/PersonajesZComponent/PersonajesZComponent';
import PersonajesComponent from './components/PersonajesComponent/PersonajesComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
function App() {
  return (
    
    <Router>
      <>
      <NavbarComponent/>
      <div className="min-h-screen w-full bg-black relative pt-16">
        <Routes>
          <Route path="/home" element={<HomeComponent />} /> 
          <Route path="/" element={<HomeComponent />} /> 
          <Route path="/personajes/dragonball-super" element={<PersonajesSuperComponent />} /> 
          <Route path="/personajes/dragonball-z" element={<PersonajesZComponent />} />
          <Route path="/personajes/dragonball" element={<PersonajesComponent />} /> 
          
          </Routes>
      </div>
      </>
    </Router>
    
  );
}

export default App;
