import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Times from './pages/Times'
import Contato from './pages/Contato'
export default function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/times" element={<Times />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </React.Fragment>
    </div>
  )
}
