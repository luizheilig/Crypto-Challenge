import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import CryptoList from './pages/CryptoList';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cryptos" element={ <CryptoList /> } />
      <Route path="/wallet" element={ <Wallet /> } />
    </Routes>
  );
}

export default App;