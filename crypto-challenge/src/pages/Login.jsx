import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <input
        onChange={ (e) => setEmailLogin(e.target.value) }
        type="text"
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        onChange={ (e) => setPasswordLogin(e.target.value) }
        type="password"
        data-testid="password-input"
        placeholder="Senha"
      />
      <button disabled={ !isValid() } onClick={ OnClickEnter }>Entrar</button>
    </div>
  );
}

export default Login;