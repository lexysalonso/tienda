import React from "react";
import style from "./filter.module.css";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "../../hooks/useFilter";
import { prices, ratings } from "./data";

const Filter = ({ menuFilter, SetCloseMenuFilter }) => {
  const { data: categories, hanndlechange } = useFilter();

  return (
    <article>
      <section
        className={
          style.navbar_menu +
          " " +
          (menuFilter ? style.navbar__menuright : style.navbar__closemenu)
        }
      >
        <AiOutlineClose
          className={style.navbar__close}
          onClick={SetCloseMenuFilter}
        ></AiOutlineClose>
        <form>
          <article className={style.navbar__menuselect__container}>
            <section className={style.navbar__menuselect__contain}>
              <article className={style.navbar__menuselect}>
                <label htmlFor="selct">Categoria del Producto</label>
                <select
                  name="categorie"
                  onChange={hanndlechange}
                  className={style.input_data}
                  id="selct"
                >
                  <option disabled selected value>
                    Elija categoria
                  </option>
                  {categories &&
                    categories.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                </select>
              </article>
              <article className={style.navbar__menuselect}>
                <label htmlFor="selct">Precio del Producto</label>
                <select
                  name="price"
                  onChange={hanndlechange}
                  className={style.input_data}
                  id="selct"
                  placeholder="Elija el precio"
                >
                  <option disabled selected value>
                    Elija Precio
                  </option>
                  {prices &&
                    prices.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.price}
                        </option>
                      );
                    })}
                </select>
              </article>
              <article className={style.navbar__menuselect}>
                <label htmlFor="selct">Clasificación del Producto</label>
                <select
                  name="rate"
                  onChange={hanndlechange}
                  className={style.input_data}
                  id="selct"
                  placeholder="Elija el precio"
                >
                  <option disabled selected value>
                    Elija la Calidad
                  </option>
                  {ratings &&
                    ratings.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {item.rate}
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
