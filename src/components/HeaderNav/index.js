import React from 'react'
import useNavbar from "../../hooks/useNabvar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import search from "../Navbar/search.svg";
import style from "./HeaderNav.module.scss";
import logo from "./Logo/Nutella-logo.svg";

const HeaderNav = () => {
    
    const {
      card: cardCarrito,
      searchvalue,
      userlocalStorage,
      isOpenProfileUser,
      OpenProfileUser,
      CloseProfileUser,
      OpenMenuFilter,
      OpenShoppingCard,
      handleSearch,
      handleLogout,
      handleLogin,
    } = useNavbar();
  
    console.log("HEADER NAVVV")
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
            value={searchvalue}
            type="text"
            placeholder="Buscar Productos"
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
              {userlocalStorage.user && (
                <div>
                  {" "}
                  <cite>Bienvenido:</cite> <p>{userlocalStorage.user}</p>{" "}
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
  );
}

export default HeaderNav;