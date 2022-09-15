import React from "react";
import style from "./card.module.css";
import { useGetPdroductsQuery } from "../../features/Products/productSlice";

const Card = () => {
  const { data: prodcuts, isError, isFetching } = useGetPdroductsQuery();
  console.log("ver producst", prodcuts ?? []);

  if (isFetching) {
    return <div>Cargando ...</div>;
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
        {prodcuts.map((p) => (
          <article className={style.article}>
            <img src={p.image} alt="asdfdf" />
            <aside>
              <p>Category: {p.category}</p>
              <p>Precio: {p.price} $</p>
              <p>Cantidad: {p.rating.count} </p>
              <button className={style.button}>Añadir</button>
            </aside>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Card;
