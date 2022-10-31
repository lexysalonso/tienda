import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./useDebounce";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/Products/productApi";

const useProductsCard = () => {
  const [productsexit, setNoProducts] = useState(true);
  const [productGrid,SetProductGrid] = useState([]);
 
  const {
    data: prodcuts,
    isError,
    isLoading,
    isFetching,
  } = useGetProductsQuery();
  
  useEffect(() => {
    SetProductGrid(prodcuts);
  }, [prodcuts]);
  
  
  console.log("ver Prodcuts useGitBla !!!", productGrid);

  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  
  

  console.log("ver data productsssss", prodcuts);
  const filter = searchparams.get("categoria");
  const debouncedSearch = useDebounce(filter, 300);

  const handleSendId = (id) => {
    navigate(`details/${id}`);
  };

  useEffect(() => {
    setNoProducts(
      prodcuts?.some((prod) =>
        prod.category.toLowerCase().includes(debouncedSearch?.toLowerCase())
      )
    );
  }, [debouncedSearch, prodcuts]);

  return {
    productGrid,
    data: prodcuts,
    isError,
    isLoading,
    isFetching,
    productsexit,
    debouncedSearch,
    handleSendId,
  };
};

export default useProductsCard;
