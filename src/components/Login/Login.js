import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "../../styles/form.css";

// vista login
export default function Login() {
  const { login, googleLogin } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/board", { replace: true });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("usuario no registrado");
      } else {
        setError("error al iniciar sesión");
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      navigate("/board", { replace: true });
    } catch (error) {
      if (error) {
        setError("error al iniciar sesión con google");
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  const handleChangeUrl = () => {
    return navigate("/register", { replace: true });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="form__email"
          type="email"
          name="email"
          placeholder="myemail@gmail.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="form__password"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="XXXXX"
        />

        <button type="submit" className="form__button--Send">
          Login
        </button>

        {error && <p>{error}</p>}
      </form>
      <section>
        <button
          type="button"
          className="form__button--Google"
          onClick={handleGoogle}
        >
          Iniciar sesión con Google
        </button>

        <button
          type="button"
          className="form__button--login"
          onClick={handleChangeUrl}
        >
          Registrate
        </button>
      </section>
    </>
  );
}
