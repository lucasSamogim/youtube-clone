import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

const Login = () => {

  const { handleLogin, login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate('/');
    }
  }, [login, navigate]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
      E-mail:
      <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      Senha:
      <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin(email, password)}>
        Login
      </button>
    </div>
  )
}

export default Login;