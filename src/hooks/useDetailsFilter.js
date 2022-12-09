import { useLazyGetCategoriexBYIDQuery } from "../features/Products/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductFilter } from "../features/Products/productSlice";
import { useNavigate } from "react-router-dom";
import { filterss } from "../helpers/filters";
import { useSearchParams } from "react-router-dom";
import { getProductFilter, getProducts } from "../features/Products/productSlice";
import { useTranslation } from 'react-i18next';

const useDetailsFilter = () => {
  //const [filters, setFilters] = useState({});
  const [search] = useSearchParams();
  const paramscategorie = search.get("categorie");
  const paramsprice = search.get("price");
  const paramsrate = search.get("rate");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  productFilter  = useSelector(getProductFilter);
  const [product] = useState(useSelector(getProducts));
  console.log("VerProductssssssss", product);

  const [trigger, { data: filtercategorie, isLoading }] =
    useLazyGetCategoriexBYIDQuery({});
  const [t,] = useTranslation("global")
    
  console.log("ver includes", paramscategorie?.includes("ALL"));

  useEffect(() => {
    paramscategorie && paramscategorie.includes("ALL")
      ? dispatch(addToProductFilter(product))
      : trigger(paramscategorie).unwrap() &&
        filtercategorie &&
        dispatch(addToProductFilter(filtercategorie));
  }, [paramscategorie, product, trigger, dispatch, navigate, filtercategorie]);

  useEffect(() => {
    paramscategorie && paramscategorie.includes("ALL")
      ? dispatch(addToProductFilter(filterss(paramsprice, paramsrate, product)))
      : filtercategorie &&
        dispatch(
          addToProductFilter(filterss(paramsprice, paramsrate, filtercategorie))
        );
    if (!paramscategorie && (paramsprice || paramsrate)) {
      dispatch(addToProductFilter(filterss(paramsprice, paramsrate, product)));
    }
  }, [
    paramsprice,
    product,
    paramscategorie,
    paramsrate,
    filtercategorie,
    dispatch,
  ]);

  return {
    t,
    productFilter,
    isLoading,
  };
};

export default useDetailsFilter;
