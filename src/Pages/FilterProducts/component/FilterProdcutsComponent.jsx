import React from "react";

import Card from "../../../components/Card";
import style from "./FilterProduct.module.css";
import useFilter from "../../../hooks/useFilter";

const FilterProdcutsComponent = () => {
  const { productFilter } = useFilter();

  console.log("VER FILTER PRODUCT", productFilter);

  return (
    <section className={style.container}>
      <div className={style.title}>
        <h1>
          <cite>Variedades para ti</cite>
        </h1>
      </div>
      <article className={style.grid}>
        {productFilter.length > 0 ? (
          productFilter.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <div className={style.text_error}>
            <p>No existen datos para su busqueda</p>
          </div>
        )}
      </article>
    </section>
  );
};

export default FilterProdcutsComponent;
