import React from "react";
import styles from "./Modal.module.css";


const Modal = ({ children, closeModal }) => {
  return (
    <article className={styles.shopping_content}>
        <section className={styles.container}>
          <button
            className={styles.shopping_content_button}
            onClick={closeModal}
          >
            X
          </button>
          {children}
        </section>
      </article>
     );
};

export default Modal;
