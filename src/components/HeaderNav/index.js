import React from "react";
import useNavbar from "../../hooks/useNabvar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";

import search from "../Navbar/search.svg";
import style from "./HeaderNav.module.scss";
import logo from "./Logo/Nutella-logo.svg";
import Switch from "react-switch";

const HeaderNav = () => {
  const {
    card: cardCarrito,
    searchvalue,

    isOpenProfileUser,
    OpenProfileUser,
    CloseProfileUser,
    OpenMenuFilter,
    OpenShoppingCard,
    handleSearch,
    handleLogin,
    handleCheckout,
    checkout,
    t,
    user,
  } = useNavbar();

  console.log("HEADER NAVVV", user);
  return (
    <div className={style.container}>
      <section className={style.navbar__top}>
        <article>
          <GiHamburgerMenu
            onClick={OpenMenuFilter}
            className={style.GIhambuger}
          ></GiHamburgerMenu>
        </article>
        <Link to="/" className={style.navbar__buttonlogo}>
          <img className={style.navbar__img} src={logo} alt="car-img" />
        </Link>
        <form>
          <input
            value={searchvalue ? searchvalue:"" }
            type="text"
            placeholder={t("header.placeholder_search")}
            className={style.navbar_input}
            onChange={handleSearch}
          />{" "}
          <div>
            <img src={search} alt={search} />
          </div>
        </form>

        <article className={style.navbar__menu}>
          <button className={style.navbar__button} onClick={OpenShoppingCard}>
            <div id="openModal" className={style.navbar__ammout}>
              {cardCarrito.length}
            </div>
            <FaCartPlus className={style.FaCard} />
          </button>

          <article className={style.navbar__user}>
            <div>
              {user && (
                <div>
                  {" "}
                  <cite>{t("header.user_saludos")}</cite> <p>{user}</p>{" "}
                  <BsFillCaretDownFill
                    className={style.navbar__FaAngle}
                    onClick={
                      !isOpenProfileUser ? OpenProfileUser : CloseProfileUser
                    }
                  ></BsFillCaretDownFill>
                </div>
              )}
            </div>
          </article>
          <article className={style.navbar__buttonloginandlogout}>
            {!user && (
              <button onClick={handleLogin}>{t("header.abrirSesion")}</button>
            )}
          </article>

          <Switch
            height={25}
            width={50}
            onChange={handleCheckout}
            checked={checkout}
          ></Switch>

          <cite className={style.Ingles}>Inglés</cite>
        </article>
      </section>
    </div>
  );
};

export default HeaderNav;
