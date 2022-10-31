import React, { memo } from "react";
//import useCard from "../../hooks/useCard";
import styles from "./shopping.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md"
import useShoppingCard from "../../hooks/useShoppingCard";

const ShoppingCard = () => {
  //const navigate = useNavigate()
  const {
    card,
    getTotalMony,
    handleSubmit,
    handleClaer,
    handleDelete,
  } = useShoppingCard();

  return (
    <div className={styles.container}>
      <article>
        <h1>Usted Tiene en su Carrito: </h1>
      </article>
      {card.length > 0
        ? card.map((item, index) => (
            <section key={index} className={styles.container_card}>
              <article>{item.title}</article>
              <article>
                <img src={item.image} alt="" />
              </article>
              <article>
                <cite>price:</cite>
                <p>{item.price}</p>
              </article>
              <article>
                <cite>Cantidad:</cite>
                <p>{item.quantity}</p>
              </article>
              <article>
                <MdAddShoppingCart
                  className={styles["icon_add"]}
                  onClick={()=> handleSubmit(item)}
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
        <button onClick={handleSubmit}>Limpiar Compra</button>
        <aside>
          <cite>Total ($) de su compra:</cite>
          <p> {`${getTotalMony()} $`} </p>
        </aside>
        <button onClick={handleClaer}>REVISAR</button>
      </article>
    </div>
  );
};

export default memo(ShoppingCard);
