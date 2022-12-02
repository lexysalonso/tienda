import React from "react";
import style from "./filter.module.css";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "../../hooks/useFilter";
import { prices, ratings } from "./data";


const Filter = () => {
 
  const { data: categories,isOpenMenuFilter,CloseMenuFilter, handleChange, handleClick } = useFilter();
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
                <label htmlFor="select">Categoria del Producto</label>
                <select
                  name="categorie"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="select"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled selected>
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
                <label htmlFor="selectprice">Precio del Producto</label>
                <select
                  name="price"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="selectprice"
                  placeholder="Elija el precio"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled selected>
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
                <label htmlFor="selectClasificacion">
                  Clasificación del Producto
                </label>
                <select
                  name="rate"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={style.input_data}
                  id="selectClasificacion"
                  placeholder="Elija el precio"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled selected>
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
