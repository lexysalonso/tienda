import React from "react";
import style from "./filter.module.css";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "../../hooks/useFilter";
import { prices, ratings } from "./data";

const Filter = () => {
  const {
    data: categories,
    isOpenMenuFilter,
    CloseMenuFilter,
    filters,
    handleChange,
    handleClick,
    t,
  } = useFilter();
  console.log("FILTERRR");
  return (
    <article>
      <section
        className={
          style.navbar_menu +
          " " +
          (isOpenMenuFilter ? style.navbar__menuright : style.navbar__closemenu)
        }
      >
        <AiOutlineClose
          className={style.navbar__close}
          onClick={CloseMenuFilter}
        ></AiOutlineClose>
        <form>
          <article className={style.navbar__menuselect__container}>
            <section className={style.navbar__menuselect__contain}>
              <article className={style.navbar__menuselect}>
                <label htmlFor="select">{t("Filter.catProd")}</label>
                <select
                  name="categorie"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="select"
                  defaultValue={filters?.categorie}
                >
                  <option disabled>{t("Filter.selectOpCat")}</option>
                  <option >ALL</option>
                  {categories &&
                    categories.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {t(item)}
                        </option>
                      );
                    })}
                </select>
              </article>
              <article className={style.navbar__menuselect}>
                <label htmlFor="selectprice">{t("Filter.priceProduct")}</label>
                <select
                  name="price"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="selectprice"
                  placeholder="Elija el precio"
                  defaultValue={filters?.price}
                >
                  <option disabled>{t("Filter.slelectOpPrice")}</option>

                  {prices &&
                    prices.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {t(item.price)}
                        </option>
                      );
                    })}
                </select>
              </article>
              <article className={style.navbar__menuselect}>
                <label htmlFor="selectClasificacion">
                  {t("Filter.clasifProd")}
                </label>
                <select
                  name="rate"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="selectClasificacion"
                  placeholder="Elija el precio"
                  defaultValue={filters?.rate}
                >
                  <option disabled>{t("Filter.selectOpClasif")}</option>
                  {ratings &&
                    ratings.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {t(item.rate)}
                        </option>
                      );
                    })}
                </select>
              </article>
            </section>
          </article>
        </form>
      </section>
    </article>
  );
};

export default Filter;
