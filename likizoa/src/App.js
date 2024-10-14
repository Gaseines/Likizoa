import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import MenuHome from './components/MenuHome';
import './App.css';

import Capa from './components/sections/Capa';
import ControleJornada from './components/sections/ControleJornada';
import NossaEmpresa from './components/sections/NossaEmpresa';
import Metodos from './components/sections/Metodos';
import IA from './components/sections/IA';
import Parceiros from './components/sections/Parceiros';
import Contato from './components/sections/Contato';
import Footer from './components/Footer';
import NossaEmpresaPage from './components/pages/NossaEmpresaPage';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/pages/Login';
import Loader from './components/Loader'




function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento de dados
    const timer = setTimeout(() => setLoading(false), 2000); // Ajuste o tempo como necessário
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='all' >

      {loading ? <Loader /> : <Router>
        <ScrollToTop />
       
          <Routes>
            <Route path="/" element={<>
              <MenuHome />
              <main>
                <Capa />
                <ControleJornada />
                <NossaEmpresa />
                <Metodos />
                <IA />
                <Parceiros />
                <Contato />
              </main>
            </>} />
            <Route path="/nossaEmpresa" element={<NossaEmpresaPage />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        
        <Footer />

      </Router>}


    </div>
  );
}

export default App;

