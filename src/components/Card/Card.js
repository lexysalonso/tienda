import React from "react";
import style from "./card.module.css";

const Card = ({ item }) => {
  return (
    <article className={style.article}>
      <img src={item.image} alt="asdfdf" />
      <aside>
        <p>Category: {item.category}</p>
        <p>Precio: {item.price} $</p>
        <p>Cantidad: {item.rating.count} </p>
        <button className={style.button}>Añadir</button>
      </aside>
    </article>
  );
};

export default Card;
