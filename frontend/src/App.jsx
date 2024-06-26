import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react'
import { Home } from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
