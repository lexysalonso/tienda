import React, { useRef, Suspense } from "react";

import style from "./navbar.module.css";
//import card from "./card.svg";
//import menu from "./menu_hambuger.svg";
//import close from "./close-icon.svg";
import search from "./search.svg";
//import { useNavigate } from "react-router-dom";
import ShoppingCard from "../shoppingCard";
import useAuth from "../../hooks/useAuth";
import useNavbar from "../../hooks/useNabvar";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import { CSSTransition } from "react-transition-group";
import styletransicion from "./ModalTransicion.module.css";

import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./Logo/Nutella-logo.svg";
//import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const Filter = React.lazy(() => import("../Filter"));

const Navbar = () => {
  const { card: cardCarrito, handleSearch, handleLogin } = useNavbar();
  const { userlocalStorage, handleLogout } = useAuth();
  const [isOpen, openModal, closeModal] = useModal();
  const [menuFilter, SetOpenMenuFilter, SetCloseMenuFilter] = useModal();
  const nodeRef = useRef(null);
  console.log("Navbar user", userlocalStorage);
  console.log("ver variable menFilteer", menuFilter);

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <section className={style.navbar__top}>
          <article>
            <GiHamburgerMenu
              onClick={SetOpenMenuFilter}
              className={style.GIhambuger}
            ></GiHamburgerMenu>
          </article>
          <Link to="/" className={style.navbar__buttonlogo}>
            <img className={style.navbar__img} src={logo} alt="car-img" />
          </Link>

          <form>
            <input
              type="text"
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
              <FaCartPlus className={style.FaCard} />
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
              {!userlocalStorage.user && (
                <button onClick={handleLogin}> Login</button>
              )}
              {userlocalStorage.user && (
                <button onClick={handleLogout}>Logout</button>
              )}
            </article>
          </article>
        </section>
      </div>
      <div>
        <Suspense fallback={<div>Cargandoooo</div>}>
          <Filter
            nodeRef={nodeRef}
            menuFilter={menuFilter}
            SetCloseMenuFilter={SetCloseMenuFilter}
          ></Filter>
        </Suspense>
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
