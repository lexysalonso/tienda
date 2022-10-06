import React, {  useState } from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import card from "./card.svg";
import menu from "./menu_hambuger.svg";
import close from "./close-icon.svg";
import {  useNavigate , useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, SetOpen] = useState(true);
//  const [searchparams, SetSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const locations = useLocation()
  

  const handleSearch = (e) => {
    navigate(`search?categoria=${e.target.value}`);
  // SetSearchParams({ categoria: e.target.value });
  };

   

  const handleSubmit = () => {
    SetOpen(false);
    console.log("success");
    console.log("ver locations", locations);
  };

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
              onChange={handleSearch}
            />{" "}
            
          </article>
          <article className={style.navbar__menu}>
            <button className={style.navbar__button}>
              <div className={style.navbar__ammout}>5</div>
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
    </header>
  );
};

export default Navbar;
