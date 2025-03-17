import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar que la página se recargue
    // Aquí puedes agregar la lógica de autenticación
    navigate('/mallas'); // Redirigir a la página de mallas
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
