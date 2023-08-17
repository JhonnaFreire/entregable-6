import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import "./styles/HomePage.css";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value);
  };
  const cbFilter = (prod) => {
    // Filter by name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    // Filter by price
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;

    return filterName && filterPrice;
  };

  return (
    <div className="filters__container">
      <div className="filters"> 
      <input
        className="category"
        value={nameValue}
        onChange={handleFilterName}
        ref={inputName}
        type="text"
      />
        <FilterCategory />
        <FilterPrice setFromTo={setFromTo} />
      </div>
      <div className="cards">
        {products?.filter(cbFilter).length ? (
          products
            ?.filter(cbFilter)
            .map((prod) => <CardProduct key={prod.id} product={prod} />)
        ) : (
          <h2 className="warning">
            Sorry 😭, any product match with that filter. ❌
          </h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
