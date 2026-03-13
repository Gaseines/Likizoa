import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import MenuHome from "./components/MenuHome";
import Capa from "./components/sections/Capa";
import ControleJornada from "./components/sections/ControleJornada";
import NossaEmpresa from "./components/sections/NossaEmpresa";
import Metodos from "./components/sections/Metodos";
import IA from "./components/sections/IA";
import Parceiros from "./components/sections/Parceiros";
import Contato from "./components/sections/Contato";
import Footer from "./components/Footer";
import NossaEmpresaPage from "./components/pages/NossaEmpresaPage";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <>
      <MenuHome />
      <main className="pageMain">
        <Capa />
        <ControleJornada />
        <NossaEmpresa />
        <Metodos />
        <IA />
        <Parceiros />
        <Contato />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="appShell">
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nossaEmpresa" element={<NossaEmpresaPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;