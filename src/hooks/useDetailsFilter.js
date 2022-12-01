import { useLazyGetCategoriexBYIDQuery } from "../features/Products/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductFilter } from "../features/Products/productSlice";
import { useNavigate } from "react-router-dom";
import { filterss } from "../helpers/filters";
import { useSearchParams } from "react-router-dom";

const useDetailsFilter = () => {
  //const [filters, setFilters] = useState({});
  const [search] = useSearchParams();
  const paramscategorie = search.get("categorie");
  const paramsprice = search.get("price");
  const paramsrate = search.get("rate");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("ver params", paramscategorie, paramsprice, paramsrate);
  const { productFilter } = useSelector((state) => state.product);

  const [product] = useState(
    useSelector((state) => state.product.product)
  );
  console.log("VerProductssssssss", product);

  const [trigger, { data: filtercategorie, isLoading }] =
    useLazyGetCategoriexBYIDQuery({});

  useEffect(() => {
    paramscategorie &&
      trigger(paramscategorie).unwrap() &&
      filtercategorie &&
      dispatch(addToProductFilter(filtercategorie));
  }, [paramscategorie, trigger, dispatch, navigate, filtercategorie]);

  useEffect(() => {
    paramscategorie &&
      filtercategorie &&
      dispatch(
        addToProductFilter(filterss(paramsprice, paramsrate, filtercategorie))
      );
    if (!paramscategorie && (paramsprice || paramsrate)) {
      console.log("verr prodcuttt", product);
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
    productFilter,
    isLoading,
  };
};

export default useDetailsFilter;
