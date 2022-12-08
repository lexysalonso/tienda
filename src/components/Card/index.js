import React from "react";
import style from "./card.module.scss";
//import useCard from "../../hooks/useCard";
import useProductsCard from "../../hooks/useProductsCard";

const Card = ({ item }) => {
  // const isOpenMenu = true
  const { handleSendId,t } = useProductsCard();
  return (
    <article className={style.article}>
      <img src={item.image} alt={item.category} />
      <aside>
        <p>
          {t("Card.Categoria")} {item.category}
        </p>
        <p>
          {t("Card.Precio")} {item.price} $
        </p>
        <p>
          {t("Card.Cantidad")} {item.rating.count}{" "}
        </p>
        <button className={style.link} onClick={() => handleSendId(item.id)}>
          {t("Card.Detalles")}
        </button>
      </aside>
    </article>
  );
};

export default Card;
