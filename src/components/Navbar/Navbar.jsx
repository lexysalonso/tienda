import React from "react";
import style from "./navbar.module.css";
import card from "./card.svg";
import menu from "./menu_hambuger.svg";
import close from "./close-icon.svg";
import search from "./search.svg"
//import { useNavigate } from "react-router-dom";
//import ShoppingCard from "../shoppingCard/ShoppingCard";
import useCard from "../../hooks/useCard";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { open, SetOpen, handleSubmit, handleSetOpen, handleSearch } =
    useCard();
  const {  userlocalStorage, handleLogout } = useAuth();
  console.log("Navbar user", userlocalStorage);

  //  const [open, SetOpen] = useState(true);
  // const [counts, setCount] = useState();
  //  const [searchparams, SetSearchParams] = useSearchParams();
  //const navigate = useNavigate();
  //  const locations = useLocation()

  // const handleSearch = (e) => navigate(`search?categoria=${e.target.value}`);
  // SetSearchParams({ categoria: e.target.value });

  //const sumar =  useCallback(() => setCount(counts + 1),[counts]);

  /*  const handleSubmit = () => {
    SetOpen(false);
    console.log("success");
    console.log("ver locations", locations);
  };  */

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <section className={style.navbar__top}>
          <button onClick={handleSetOpen} className={style.navbar__button}>
            <img className={style.navbar__img} src={menu} alt="car-img" />
          </button>

          <form onSubmit={handleSubmit}>
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
            <button className={style.navbar__button}>
              <div className={style.navbar__ammout}>5</div>
              <img className={style.navbar__img} src={card} alt="car-img" />
            </button>
            <article className={style.navbar__user}>
              <div>
                {userlocalStorage && (
                  <div>
                    {" "}
                    <cite>Bienvenido:</cite> <p>{userlocalStorage.user}</p>
                  </div>
                )}
              </div>
            </article>
            <article className={style.navbar__buttonloginandlogout}>
              {!userlocalStorage.user && (
                <button
                  // to="/login"
                  onClick={handleSubmit}
                  //  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  {" "}
                  Login
                </button>
              )}
              {userlocalStorage.user && (
                <button
                  //   to="login"
                  onClick={handleLogout}
                  // style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Logout
                </button>
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
    </header>
  );
};

export default Navbar;
