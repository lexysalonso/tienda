import React, { useEffect, useState, memo } from "react";
import style from "./card.module.css";
import Card from "./Card";
import Spinner from "../Spinner/Spinner";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { Empyty } from "../Empyty/Empyty";
import { useGetProductsQuery } from '../../features/Products/productApi';

const GridCard = () => {
  const [productsexit, setNoProducts] = useState(true);
  const {
    data: prodcuts,
    isError,
    isLoading,
    isFetching,
  } = useGetProductsQuery(/* undefined, {
    pollingInterval: 3000,
  } */);
  console.log("ver producst", prodcuts ?? []);
  const [searchparams] = useSearchParams();
  const filter = searchparams.get("categoria");
  //  const filter = searchparams.get("filter") ?? "";
  //console.log("ver Tipo Data", Boolean(filter));

  const debouncedSearch = useDebounce(filter, 300);
  console.log("verProducts", debouncedSearch);

  useEffect(() => {
    console.log("ver el componente");

    setNoProducts(
      prodcuts?.some((prod) =>
        prod.category.toLowerCase().includes(debouncedSearch?.toLowerCase())
      )
    );
  }, [debouncedSearch, prodcuts]);
  console.log("ver si exis", productsexit);
  
  if (!productsexit && debouncedSearch !== null) {
    return (
      <div>
        <Empyty />
      </div>
    ); 
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isFetching) {
    return <Spinner />;
  }
  if (isError)
    return (
      <div>
        <p>Hubo un error</p>
      </div>
    );
  return (
    <div className={style.container}>
      
      <section className={style.grid}>
        {prodcuts.length > 0
          ? prodcuts
              .filter((prod) =>
                debouncedSearch
                  ? prod.category
                      .toLowerCase()
                      .includes(debouncedSearch.toLowerCase())
                  : prod
              )
              .map((item, index) => <Card key={index} item={item}></Card>)
          : "NO existe prodcutos para vender"}
      </section>
    </div>
  );
};

export default memo(GridCard);
