import React, { useEffect, useState } from 'react';
import '../css/Wallet.css'
import Header from '../components/Header';
import Footer from '../components/Footer';


function Wallet() {
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    const returnStorage = readStorage();
    setWallet(returnStorage);
  }, []);
  const readStorage = () => JSON
  .parse(localStorage.getItem('wallet')) || [];

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
});

  const removeBtnClick = (name) => {
    const updatedWallet = wallet.filter((coin) => coin.name !== name);
    localStorage.setItem('wallet', JSON.stringify(updatedWallet));
    setWallet(updatedWallet);
  };
      
  return (
    <>
      <Header/>
      <div className='wallet-container'>
      {wallet &&
            wallet.map((coin) => (
            <div className="wallet-item" key={ coin.name }>
              <h3>{' '} {coin.name}</h3>
              <h3>Quantity:{' '} {coin.quantity}</h3>
              <h3>Total: {' '} {USDollar.format(coin.quantity*coin.price)}</h3>
                <button
                  data-testid="add-btn"
                  onClick={ () => removeBtnClick(coin.name) }
                >
                  X
                </button>
            </div>
          ))}
          </div>
      <Footer/>
    </>
  );
}

export default Wallet;
