import React, { useEffect, useState } from 'react'
import { mockAPI } from '../helpers/mockAPI';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/CryptoList.css'

function CryptoList() {

    const [data, setData] = useState([]);
    const [addData, setAddData] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        setData(mockAPI.data);
      };
      fetchData();
    }, []);
    
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd',
    });
    
    function addBtnClick({ target: { id } }) {
        const addCrypto = data.filter((add) => Number(add.id) === Number(id));
        console.log(addCrypto);
        setAddData(addCrypto);
    }
    
    function filterCrypto(crypto) {
        setSearchTerm(crypto);
    }
    
    const filteredData = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const readStorage = () => JSON
    .parse(localStorage.getItem('wallet')) || [];
    
    function addWallet() {
        const returnStorage = readStorage();
        const existingCryptoIndex = returnStorage.findIndex(
            (crypto) => crypto.name === addData[0].name
        );
    
        if (existingCryptoIndex !== -1) {
            const updatedWallet = [...returnStorage];
            updatedWallet[existingCryptoIndex].quantity += quantity;
            localStorage.setItem('wallet', JSON.stringify(updatedWallet));
        } else {
            const itemWallet = {
                name: addData[0].name,
                price: addData[0].quote.USD.price,
                quantity: quantity,
            };
            localStorage.setItem('wallet', JSON.stringify([...returnStorage, itemWallet]));
        }
        navigate('/wallet');
    }

  return (
    <div className="container">
      <Header/>
      <br></br>
        <div>
            {addData && 
            <div className='addCryptoContainer'>
            <h3>{addData[0].name}</h3>
            <h3>Price:{' '}{USDollar.format(addData[0].quote.USD.price)}</h3>
            <h3>
              Quantity:{' '}
              <input
                type="number"
                onChange={(e) => setQuantity(Number(e.target.value))} // Convertendo para número
              ></input>
            </h3>
            {
              <h3>
                Total:{' '}
                {USDollar.format(addData[0].quote.USD.price * quantity)}
              </h3>
            }
             <button
                data-testid="add-btn"
                id={ addData[0].name }
                onClick={ addWallet }
            >
                Add to Wallet
            </button>
            </div>
            }
        </div>
        <div >
        <label className='searchInput'>
          Search (name)
          <input 
            onChange={(e) => filterCrypto(e.target.value)}
            value={searchTerm}
          ></input>
        </label>
        </div>
 {     <table className='cryptoTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>Total Supply (USD)</th>
          </tr>
        </thead>
        <tbody>
        {filteredData &&
            filteredData.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.name}</td>
              <td>{exp.symbol}</td>
              <td>{USDollar.format(exp.quote.USD.price)}</td>
              <td>{USDollar.format(exp.quote.USD.market_cap)}</td>
              <td>{USDollar.format(exp.total_supply)}</td>
                <button
                  className='addBtn'
                  data-testid="add-btn"
                  id={ exp.id }
                  onClick={ addBtnClick }
                >
                  Add 
                </button>
            </tr>
          ))}
        </tbody>
      </table>}
      < Footer/>
    </div>
  );
}

export default CryptoList;