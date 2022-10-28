import React from "react";

import style from "./navbar.module.css";
//import card from "./card.svg";
import menu from "./menu_hambuger.svg";
import close from "./close-icon.svg";
import search from "./search.svg";
//import { useNavigate } from "react-router-dom";
import ShoppingCard from "../shoppingCard/ShoppingCard";
import useAuth from "../../hooks/useAuth";
import useNavbar from "../../hooks/useNabvar";
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import { CSSTransition } from "react-transition-group";
import styletransicion from "./ModalTransicion.module.css";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { open, card:cardCarrito, SetOpen, handleSetOpen, handleSearch } = useNavbar();
  const { userlocalStorage, handleLogout } = useAuth();
  const [isOpen, openModal, closeModal] = useModal();
  console.log("Navbar user", userlocalStorage);

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <section className={style.navbar__top}>
          <button onClick={handleSetOpen} className={style.navbar__button}>
            <img className={style.navbar__img} src={menu} alt="car-img" />
          </button>

          <form>
            <input
              type="search"
              placeholder="Categoria para buscar"
              className={style.navbar_input}
              onChange={handleSearch}
            />{" "}
            <div>
              <img src={search} alt={search} />
            </div>
          </form>

          <article className={style.navbar__menu}>
            <button className={style.navbar__button} onClick={openModal}>
              <div id="openModal" className={style.navbar__ammout}>
                {cardCarrito.length}
              </div>
              <FaCartPlus className={style.FaCard}/>
            </button>
            <article className={style.navbar__user}>
              <div>
                {userlocalStorage.user && (
                  <div>
                    {" "}
                    <cite>Bienvenido:</cite> <p>{userlocalStorage.user}</p>
                  </div>
                )}
              </div>
            </article>
            <article className={style.navbar__buttonloginandlogout}>
              {!userlocalStorage.user && <button> Login</button>}
              {userlocalStorage.user && (
                <button onClick={handleLogout}>Logout</button>
              )}
            </article>
          </article>
        </section>
      </div>
      <div className={open ? style.navbar__menuhamburger : ""}>
        <article className={style.navbar__close}>
          <div className={style.navbar__menuright}>
            <button
              onClick={() => SetOpen(true)}
              className={style.navbar__closeimg}
            >
              <img src={close} alt="close" />
            </button>

            <ul className={style.navbar__menurightul}>
              <li>Elemnto 1</li>
              <li>Elemnto 2</li>
              <li>Elemnto 3</li>
              <li>Elemnto 4</li>
              <li>Elemnto 5</li>
            </ul>
          </div>
        </article>
      </div>
      <div>
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={styletransicion}
          unmountOnExit
        >
          <Modal closeModal={closeModal}>
            <ShoppingCard />
          </Modal>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Navbar;
