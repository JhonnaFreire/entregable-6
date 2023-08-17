import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './styles/LoginPage.css'

const LoginPage = () => {
  const { handleSubmit, reset, register } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate()

  const submit = (data) => {
    loginUser(data, navigate)
  };
  return (
    <form className="container__login" onSubmit={handleSubmit(submit)}>
      <div className="login__form">
        <label className="input__login" htmlFor="email">Email </label>
        <input className="input__bar-log" {...register("email")} type="email" id="email" />
      </div>
      <div className="">
        <label className="input__login" htmlFor="password">Password </label>
        <input className="input__bar-log" {...register("password")} type="password" id="password" />
      </div>
      <button className="login__btn">Login</button>
    </form>
  );
};

export default LoginPage;
