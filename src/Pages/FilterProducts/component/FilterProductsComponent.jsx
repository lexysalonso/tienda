import React from "react";
import Card from "../../../components/Card";
import style from "./FilterProduct.module.scss";
import Spinner from '../../../components/Spinner/index';
import useDetailsFilter from '../../../hooks/useDetailsFilter';

const FilterProdcutsComponent = () => {
  
   const { productFilter, isLoading,t } = useDetailsFilter();

  console.log("VER FILTER PRODUCT", productFilter);
  if(isLoading) return <Spinner></Spinner>
   
  return (
    <section className={style.container}>
      <div className={style.title}>
        <h1>
          <cite>{t("productGrid.title")}</cite>
        </h1>
      </div>
      <article className={style.grid}>
        {productFilter.length > 0 ? (
          productFilter.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <div className={style.text_error}>
            <p>{t("filterProducts.sms")}</p>
          </div>
        )}
      </article>
    </section>
  );
};

export default FilterProdcutsComponent;
