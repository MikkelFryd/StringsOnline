import { useForm } from "react-hook-form";
import axios from "axios";
import Style from './login.module.scss'
import { useAuth } from "../Components/Auth/AuthContext";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginData, setLoginData } = useAuth();

  const sendLoginRequest = async (data, e) => {
    e.target.reset();
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", data.username);
    urlencoded.append("password", data.password);
    const url = "https://api.mediehuset.net/token";
    const result = await axios.post(url, urlencoded);
    handleSessionData(result);
  };

  const handleSessionData = (res) => {
    if (!res.message) {
      setLoginData(res.data);
      sessionStorage.setItem("token", JSON.stringify(res.data));
    }
  }

  const logOut = () => {
	  sessionStorage.removeItem('token')
	  setLoginData('')
  }

  return (
    <div>
      {!loginData && !loginData.username ? (
        <form className={Style.loginform} onSubmit={handleSubmit(sendLoginRequest)}>
          <h2>Login</h2>
          <h4>Indtast brugernavn og adgangskode for at logge på</h4>
          <div>
            <label htmlFor="username">Brugernavn:</label>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span>
                Du skal udfylde dit brugernavn!
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password">Adgangskode:</label>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span>
                Du skal udfylde din adgangskode!
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      ) : 
		<div>
			<p>Du er logget ind som <i>{loginData.username}</i></p>
			<button onClick={logOut}>Log ud</button>
		</div>
	  }
    </div>
  );
};