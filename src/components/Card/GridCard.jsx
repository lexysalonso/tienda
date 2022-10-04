import React from "react";
import style from "./card.module.css";
import Card from "./Card";
import Spinner from "../Spinner/Spinner";
import { useGetPdroductsQuery } from "../../features/Products/productSlice";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce"


const GridCard = () => {
  const { data: prodcuts, isError, isLoading } = useGetPdroductsQuery();
  console.log("ver producst", prodcuts ?? []);
  const [searchparams] = useSearchParams();
  const filter = searchparams.get("categoria");
//  const filter = searchparams.get("filter") ?? "";
   console.log("ver Tipo Data", Boolean(filter))
   const debouncedSearch = useDebounce(filter, 3000);
  if (isLoading) {
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

export default GridCard;
