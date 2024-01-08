import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

function Login() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const navigate = useNavigate();

  function isValid() {
    return (/^[\d\w]{1,20}@[\w]{1,10}\.com$/i.test(emailLogin) && passwordLogin.length >= 6);
  }

  function OnClickEnter(e) {
    e.preventDefault();
    navigate('/cryptos');
  }

  return (
    <div className="login-form-container">
      <h1>MyCryptos</h1>
      <input
        onChange={ (e) => setEmailLogin(e.target.value) }
        type="text"
        className="input-field"
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        onChange={ (e) => setPasswordLogin(e.target.value) }
        type="password"
        className="input-field"
        data-testid="password-input"
        placeholder="Password"
      />
      <button className="button" disabled={ !isValid() } onClick={ OnClickEnter }>Enter</button>
    </div>
  );
}

export default Login;