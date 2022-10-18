import React, { memo } from "react";
import useCard from "../../hooks/useCard";
import styles from "./shopping.module.css";

const ShoppingCard = ({sumar}) => {

 console.log("ShopiingCard")
  //const {sumar} = useCard()
  return (
    <div className={styles.color}>
      <button onClick={sumar}>suma</button>
      ShoppingCard
    </div>
  );
};

export default memo(ShoppingCard);
