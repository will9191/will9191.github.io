import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroHome from './components/HeroHome';
import HeroSkills from './components/HeroSkills';
import HeroContact from './components/HeroContact';
import HeroProjects from './components/HeroProjects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroHome />} />
          <Route path='/skills' element={<HeroSkills />} />
          <Route path='/projects' element={<HeroProjects />} />
          <Route path='/contact' element={<HeroContact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
