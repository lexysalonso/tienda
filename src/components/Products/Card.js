import React from "react";
import style from "./card.module.css";
//import useCard from "../../hooks/useCard";
import useProductsCard from "../../hooks/useProductsCard";

const Card = ({ item }) => {
  // const isOpenMenu = true
  const { handleSendId } = useProductsCard();
  return (
    <article className={style.article}>
      <img src={item.image} alt={item.category} />
      <aside>
        <p>Category: {item.category}</p>
        <p>Precio: {item.price} $</p>
        <p>Cantidad: {item.rating.count} </p>
        <button className={style.link} onClick={()=>handleSendId(item.id)}>
          Detalles
        </button>
      </aside>
    </article>
  );
};

export default Card;
