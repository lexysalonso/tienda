import React,{useContext} from 'react'
import Modal from "../Modal";
import ShoppingCard from '../ShoppingCard';
import { CSSTransition } from "react-transition-group";
import NavbarContext from '../../context/NavbarContext';
import styletransicion from "./ModalTransicion.module.css";


const ModalTransicion = () => {
  const { isOpenShoppingCard, } = useContext(NavbarContext); 
  console.log("MODAL TRANSACTION")
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
}

export default ModalTransicion;