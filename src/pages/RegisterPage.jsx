import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './styles/RegisterPage.css'

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { createUser } = useAuth();

  const navigate = useNavigate()
  const submit = (data) => {
    createUser(data, navigate)
    reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    })
  };
  return (
    <form className='container' onSubmit={handleSubmit(submit)}>
      <div className='form__container'>
        <label className='input__text' htmlFor="firstname">First Name </label>
        <input className='input__bar' {...register("firstName")} type="text" id="firstname" />
      </div>
      <div className='form__container'>
        <label className='input__text' htmlFor="lastname">Last Name </label>
        <input className='input__bar' {...register("lastName")} type="text" id="lastname" />
      </div>
      <div className='form__container'>
        <label className='input__text' htmlFor="email">Email </label>
        <input className='input__bar' {...register("email")} type="email" id="email" />
      </div>
      <div className='form__container'>
        <label className='input__text' htmlFor="password">Password </label>
        <input className='input__bar' {...register("password")} type="password" id="password" />
      </div>
      <div className='form__container'>
        <label className='input__text' htmlFor="phone">Phone </label>
        <input className='input__bar' {...register("phone")} type="text" id="phone" />
      </div>
      <button className='btn__create'>Create User</button>
    </form>
  );
};

export default RegisterPage;
