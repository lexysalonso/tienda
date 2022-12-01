import React, { useRef, Suspense } from "react";

import style from "./navbar.module.scss";

import search from "./search.svg";

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
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";


const Filter = React.lazy(() => import("../Filter"));

const Navbar = () => {
  const { card: cardCarrito, handleSearch, handleLogin } = useNavbar();
  const { userlocalStorage, handleLogout } = useAuth();
  const [isOpen, openModal, closeModal] = useModal();
  const [menuFilter, SetOpenMenuFilter, SetCloseMenuFilter] = useModal();
  const [isOpenProfile, openModalProfile, closeModalProfile] = useModal();
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
                    <cite>Bienvenido:</cite> <p>{userlocalStorage.user}</p>{" "}
                    <BsFillCaretDownFill
                      className={style.navbar__FaAngle}
                      onClick={
                        !isOpenProfile ? openModalProfile : closeModalProfile
                      }
                    ></BsFillCaretDownFill>
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
      {isOpenProfile && (
        <div className={style.navbar__profile}>
          <section className={style.navbar__profile__container}>
            <section className={style.navbarprofile_Encabezado}>
              Ver Perfil
            </section>
            <Link to="/shoppinguser" className={style.navbarprofile_item}>
              ver compras
            </Link>
            <Link className={style.navbarprofile_item}>-</Link>
            <Link className={style.navbarprofile_item}>-</Link>
            <Link to="/login" onClick={handleLogout} className={style.navbarprofile_item}>
              Logout
            </Link>
          </section>
        </div>
      )}
    </header>
  );
};

export default Navbar;
