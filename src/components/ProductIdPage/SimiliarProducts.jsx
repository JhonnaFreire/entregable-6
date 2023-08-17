import { useEffect } from "react";
import UseFetch from "../../hooks/UseFetch";
import CardProduct from "../HomePage/CardProduct";

const SimiliarProducts = ({ product }) => {
  const [productsByCategory, getProductsByCategory] = UseFetch();

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.categoryId}`);
    }
  }, [product]);

  const cbFilter = prod => {
    if(prod.id !== product.id){
        return prod
    }
  }

  return (
    <div>
      <h3>Similiar products</h3>
      <div>
        {
            productsByCategory?.filter(cbFilter).map(prod => (
                <CardProduct
                    key={prod.id}
                    product={prod}
                />
            ))
        }
      </div>
    </div>
  );
};

export default SimiliarProducts;
