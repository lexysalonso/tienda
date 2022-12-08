import React from "react";
import styles from "./Modal.module.css";
import useNavbar from "../../hooks/useNabvar";

const Modal = ({ children }) => {
  const { CloseShoppingCard } = useNavbar();
  return (
    <article className={styles.shopping_content}>
      <section className={styles.container}>
        <button
          className={styles.shopping_content_button}
          onClick={CloseShoppingCard}
        >
          X
        </button>
        {children}
      </section>
    </article>
  );
};

export default Modal;
