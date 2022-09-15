import React from 'react'
import style from "./navbar.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/app" className={style.list}>
        Navbar{" "}
      </Link>
    </div>
  );
}

export default Navbar