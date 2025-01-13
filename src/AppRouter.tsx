import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import CountryDetail from './components/CountryDetails'; 

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:cca2" element={<CountryDetail/>} />
    </Routes>
  );
};

export default AppRouter;
