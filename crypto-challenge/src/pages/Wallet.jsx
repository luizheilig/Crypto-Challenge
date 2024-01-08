import React, { useEffect, useState } from 'react';

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
      {wallet &&
            wallet.map((coin) => (
            <div key={ coin.name }>
              <h1>{coin.name}</h1>
              <h1>{coin.quantity}</h1>
              <h1>{USDollar.format(coin.quantity*coin.price)}</h1>
                <button
                  data-testid="add-btn"
                  onClick={ () => removeBtnClick(coin.name) }
                >
                  X
                </button>
            </div>
          ))}
    </>
  );
}

export default Wallet;
