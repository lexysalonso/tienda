import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./useDebounce";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/Products/productApi";
import { useLocation } from "react-router-dom";

const useProductsCard = () => {
  const [productsexit, setNoProducts] = useState(true);
  const location = useLocation()

  const navigate = useNavigate();

  const [searchparams] = useSearchParams();

  const filter = searchparams.get("categoria");
  const debouncedSearch = useDebounce(filter, 300);

  const {
    data: products,
    isError,
    isLoading,
    isFetching,
  } = useGetProductsQuery();

  useEffect(() => {
    products  && setNoProducts(
      products?.some((prod) =>
        prod.category.toLowerCase().includes(debouncedSearch?.toLowerCase())
      )
    );
  }, [debouncedSearch, products]);

  const handleSendId = (id) => {
    console.log("ver location details", location)
   return  location.pathname === "/" ? navigate(`details/${id}`):
    navigate(`${location.pathname}/details/${id}`);
  };

  return {
    products,
    isError,
    isLoading,
    isFetching,
    productsexit,
    debouncedSearch,
    handleSendId,
  };
};

export default useProductsCard;
