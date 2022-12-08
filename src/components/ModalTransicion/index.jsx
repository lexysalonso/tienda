import React from "react";
import Modal from "../Modal";
import ShoppingCard from "../ShoppingCard";
import { CSSTransition } from "react-transition-group";

import styletransicion from "./ModalTransicion.module.css";
import useNavbar from "../../hooks/useNabvar";

const ModalTransicion = () => {
  const { isOpenShoppingCard } = useNavbar();
  console.log("MODAL TRANSACTION");
  return (
    <div>
      <CSSTransition
        in={isOpenShoppingCard}
        timeout={200}
        classNames={styletransicion}
        unmountOnExit
      >
        <Modal>
          <ShoppingCard />
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default ModalTransicion;
