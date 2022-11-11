import {
  useGetCategoryQuery,
  useGetCategoriexBYIDQuery,
} from "../features/Products/productApi";
import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addToProductFilter } from "../features/Products/productSlice";
import { useNavigate } from "react-router-dom";
import { filterss } from "../helpers/filters";

const useFilter = () => {
  const [filters, setFilters] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProducts] = useState(
    useSelector((state) => state.product.productFilter)
  );
 

  const {productFilter} = useSelector((state)=>state.product)

  //const [filtercategories,setFilterCatagorie] = useState();
  const { data } = useGetCategoryQuery();
  const { data: filtercategorie } = useGetCategoriexBYIDQuery(
    filters?.categorie
  );

  const hanndlechange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    navigate("/filter");
  };

  console.log("ver data de los filtros", filters);
  console.log("ver data de los productos", product);

  useEffect(() => {
    if (filters !== null) {
      const { categorie } = filters;
      if (categorie !== undefined) {
        setProducts(filtercategorie)
        dispatch(addToProductFilter(filtercategorie));
      }
    }
  }, [filters, dispatch, filtercategorie]);

  useEffect(() => {
    if (filters !== null) {
      let result = filterss(filters, filtercategorie);
      dispatch(addToProductFilter(result));
    }
  }, [filters, filtercategorie, dispatch]);

  return {
    productFilter,
    data,
    hanndlechange,
    filtercategorie,
  };
};

export default useFilter;
