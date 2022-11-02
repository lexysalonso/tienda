import React from "react";
import style from "./filter.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Filter = ({ menuFilter, SetCloseMenuFilter }) => {
  return (
    <article className={style.navbar__menu}>
      <section
        className={
          menuFilter && menuFilter
            ? style.navbar__menuright
            : style.navbar__closemenu
        }
      >
        
          <AiOutlineClose
            className={style.navbar__close}
            onClick={SetCloseMenuFilter}
          ></AiOutlineClose>

          <ul className={style.navbar__menurightul}>
            <li>Elemnto 1 * </li>
            <li>Elemnto 2 * </li>
            <li>Elemnto 3 *</li>
            <li>Elemnto 4 *</li>
            <li>Elemnto 5 *</li>
          </ul>
       
      </section>
    </article>
  );
};

export default Filter;
