import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import CountryDetail from './components/CountryDetails'; 
import Header from './components/Header';
import Footer from './components/Footer';

const AppRouter: React.FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:cca2" element={<CountryDetail/>} />
    </Routes>
    <Footer/>
    </>
  );
};

export default AppRouter;
