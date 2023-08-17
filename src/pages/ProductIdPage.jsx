import { useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductIdPage/ProductInfo";
import SimiliarProducts from "../components/ProductIdPage/SimiliarProducts";
import SliderImgs from "../components/ProductIdPage/SliderImgs";

const ProductIdPage = () => {
  const { id } = useParams();

  const [product, getSingleProduct] = UseFetch();
  useEffect(() => {
    getSingleProduct(`/products/${id}`);
  }, [id]);

  return (
    <div>
      <SliderImgs
        product={product}
      />
      <ProductInfo
        product={product}
      />
      <SimiliarProducts
        product={product}
    />
    </div>
  );
};

export default ProductIdPage;
