import { useForm } from "react-hook-form";
import './Styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {
  const {register, reset, handleSubmit} = useForm()

  const submit = data => {
    const from = Number(data.from.trim())
    const to = + data.to.trim() 
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article className="price__container">
      <h3 className="price__title">Price</h3>
      <form className="form__container" onSubmit={handleSubmit(submit)}>
        <div className="form">
          <label className="from__title" htmlFor="from">From </label>
          <input className="input" {...register('from')} type="number" id="from" />
        </div>
        <div className="to">
          <label className="to__title" htmlFor="to">To </label>
          <input className="input" {...register('to')} type="number" id="to" />
        </div>
        <button className="filter__btn">Filter Price</button>
      </form>
    </article>
  );
};

export default FilterPrice;
