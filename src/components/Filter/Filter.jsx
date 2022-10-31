import React from "react";
import style from "./filter.module.css"

const Filter = ({ close, SetCloseMenuFilter }) => {
  return (
    <div >
      <article className={style.navbar__close}>
        <div className={style.navbar__menuright}>
          <button
            onClick={SetCloseMenuFilter}
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
  );
};

export default Filter;
