import React, { memo } from "react";
//import useCard from "../../hooks/useCard";
import styles from "./shopping.module.scss";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import useShoppingCard from "../../hooks/useShoppingCard";

const ShoppingCard = () => {
  //const navigate = useNavigate()
  const { t, card, getTotalMony, handleAdd, handleClaer, handleDelete } =
    useShoppingCard();
  console.log("VER SHOPPING CARD", card);
  return (
    <div className={styles.container}>
      <article>
        <h1>{t("shoppingCard.title")} </h1>
      </article>
      {card.length > 0
        ? card.map((item, index) => (
            <section key={index} className={styles.container_card}>
              <article>{item.title}</article>
              <article>
                <img src={item.image} alt="" />
              </article>
              <article>
                <cite>{t("shoppingCard.precio")}</cite>
                <p>{item.price}</p>
              </article>
              <article>
                <cite>{t("shoppingCard.cantidad")}:</cite>
                <p>{item.quantity}</p>
              </article>
              <article>
                <MdAddShoppingCart
                  className={styles["icon_add"]}
                  onClick={() => handleAdd(item)}
                ></MdAddShoppingCart>
                <RiDeleteBinFill
                  className={styles.icon}
                  onClick={() => handleDelete(item, true)}
                ></RiDeleteBinFill>
                <MdDeleteSweep
                  onClick={() => handleDelete(item)}
                  className={styles.icon}
                ></MdDeleteSweep>
              </article>
            </section>
          ))
        : "No existen productos en el carrito"}
      <article>
        <button onClick={handleClaer}>{t("shoppingCard.limpiarcompra")}</button>
        <aside>
          <cite>{t("shoppingCard.totalPayment")}</cite>
          <p> {`${getTotalMony()} $`} </p>
        </aside>
        <button onClick={handleClaer}>{t("shoppingCard.chequear")}</button>
      </article>
    </div>
  );
};

export default memo(ShoppingCard);
