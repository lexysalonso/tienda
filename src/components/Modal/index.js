import React,{useContext} from "react";
import styles from "./Modal.module.css";
import NavbarContext from '../../context/NavbarContext';


const Modal = ({ children }) => {
  const { CloseShoppingCard } = useContext(NavbarContext);
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
