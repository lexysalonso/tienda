import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import card from "./card.svg";
import menu from "./menu_hambuger.svg"
const Navbar = () => {


  const handleSubmit =()=>{
    console.log("success")
  } 
  let active = {
    textDecoration: "none",
    color: "red",
  };
  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <section className={style.navbar__top}>
          <button onClick={handleSubmit} className={style.navbar__button}>
            <img className={style.navbar__img} src={menu} alt="car-img" />
          </button>

          <article>
            <input
              type="search"
              placeholder="Categoria para buscar"
              className={style.navbar_input}
            />{" "}
            <button className={style.navbar__inputbutton__search}>
              Buscar
            </button>
          </article>
          <article className={style.navbar__menu}>
            <button className={style.navbar__button}>
              <img className={style.navbar__img} src={card} alt="car-img" />
            </button>
            <NavLink
              to="login"
              onClick={handleSubmit}
              className={style.navbar__menulogin}
              style={({ isActive }) => (isActive ? active : undefined)}
            >
              {" "}
              Login{" "}
            </NavLink>
            <NavLink className={style.navbar__menulogin}>Logout</NavLink>
          </article>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
