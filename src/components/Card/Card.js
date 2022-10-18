import React,{} from "react";
import style from "./card.module.css";



const Card = ({ item }) => {
  // const isOpenMenu = true
 console.log("se monto el componwnte Card")
  return (
    <article className={style.article}>
      <img src={item.image} alt={item.category} />
      <aside>
        <p>Category: {item.category}</p>
        <p>Precio: {item.price} $</p>
        <p>Cantidad: {item.rating.count} </p>
        
        <button className={style.button} onClick={()=>console.log("Detalles")}>Detalles</button>
      </aside>
    </article>
  );
};

export default Card;
