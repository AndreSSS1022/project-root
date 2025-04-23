// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Locales from './components/Locales';
import Favoritos from './components/Favoritos';
import Perfil from './components/Perfil';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;