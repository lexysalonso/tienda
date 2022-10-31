import React, { memo } from "react";
import style from "./card.module.css";
import Card from "./Card";
import Spinner from "../Spinner/Spinner";
import { Empyty } from "../Empyty/Empyty";
import useProductsCard from "../../hooks/useProductsCard";

const GridCard = () => {

  const {
    productGrid,
    isError,
    isLoading,
    isFetching,
    productsexit,
    debouncedSearch,
  } = useProductsCard();

  console.log("ver Prodcuts first !!!", productGrid);

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
      <div className={style.title}>
        <h1>
          <cite>Variedades para ti</cite>
        </h1>
      </div>

      <section className={style.grid}>
        {productGrid && productGrid.length > 0
          ? productGrid
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
