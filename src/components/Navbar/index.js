import React from "react";
import Profile from "../Profile";
import HeaderNav from "../HeaderNav";
import ModalTransicion from "../ModalTransicion";
import style from "./navbar.module.scss";
import { NavbarProvider } from "../../context/NavbarContext";
const Filter = React.lazy(() => import("../Filter"));
//import Filter from "../Filter";

const Navbar = () => {
  return (
    <>
      <header className={style.navbar}>
         <NavbarProvider>
          <HeaderNav />
          <Filter />
          <ModalTransicion />
          <Profile />
        </NavbarProvider>
      </header>
    </>
  );
};

export default Navbar;
