import React, { memo } from "react";
//import useCard from "../../hooks/useCard";
import styles from "./shopping.module.css";
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import {
  clearToCard,
  removeItemCard,
} from "../../features/ShoppingCard/shoppingCardSlice";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";

const ShoppingCard = () => {
  //const navigate = useNavigate()
  const dispatch = useDispatch();

  const { card } = useSelector((state) => state.card);

  const getTotalMony = () => {
    let getTotal = card.reduce((acc, item) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0);
    return getTotal;
  };

  const handleSubmit = () => {
    dispatch(clearToCard());
  };

  const handleDelete = (item, change = false) => {
    let item1 = {
      item,
      change,
    };
    dispatch(removeItemCard(item1, change));
  };

  return (
    <div className={styles.container}>
      <article>
        <h1>Usted Tiene en su Carrito: </h1>
      </article>
      {card.length > 0
        ? card.map((item, index) => (
            <section key={index} className={styles.container_card}>
              <article>
                {item.title}
              </article>
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
        <button onClick={handleSubmit}>REVISAR</button>
      </article>
    </div>
  );
};

export default memo(ShoppingCard);
