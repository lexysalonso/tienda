import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./useDebounce";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/Products/productApi";
import {useSelector} from 'react-redux'

const useProductsCard = () => {
  const [productsexit, setNoProducts] = useState(true);
  const [productGrid,SetProductGrid] = useState([]);

  const navigate = useNavigate();
  
  const {product} = useSelector((state)=>state.product)
  const [searchparams] = useSearchParams();

  const filter = searchparams.get("categoria");
  const debouncedSearch = useDebounce(filter, 300);
 
  const {
    isError,
    isLoading,
    isFetching,
  } = useGetProductsQuery();
  
  useEffect(() => {
    SetProductGrid(product);
  }, [product]);
  
  useEffect(() => {
    setNoProducts(
      product?.some((prod) =>
        prod.category.toLowerCase().includes(debouncedSearch?.toLowerCase())
      )
    );
  }, [debouncedSearch, product]);

  const handleSendId = (id) => {
    navigate(`details/${id}`);
  };
 

  return {
    productGrid,
    isError,
    isLoading,
    isFetching,
    productsexit,
    debouncedSearch,
    handleSendId,
  };
};

export default useProductsCard;
