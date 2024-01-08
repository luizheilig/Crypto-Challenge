import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { mockAPI } from './helpers/mockAPI';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setDados(mockAPI.data);
    };

    fetchData();
  }, []);

  console.log(dados);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/wallet" element={ <Wallet /> } />
    </Routes>
  );
}

export default App;