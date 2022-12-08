import React from "react";
import style from "./card.module.css";
import Card from "../../../components/Card";
import Spinner from "../../../components/Spinner";
import { Empyty } from "../../../components/Empyty";
import useProductsCard from "../../../hooks/useProductsCard";

const GridCard = () => {
  const {
    products,
    isError,
    isLoading,
    isFetching,
    productsexit,
    debouncedSearch,
    t,
  } = useProductsCard();

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
          <cite>{t("productGrid.title")}</cite>
        </h1>
      </div>

      <section className={style.grid}>
        {products && products.length > 0
          ? products
              .filter((prod) =>
                debouncedSearch
                  ? prod.category
                      .toLowerCase()
                      .includes(debouncedSearch.toLowerCase())
                  : prod
              )
              .map((item, index) => <Card key={index} item={item}></Card>)
          : "NO existe productos para vender"}
      </section>
    </div>
  );
};

export default GridCard;
