import React from "react";
import style from "./Profile.module.scss";
import useProfile from "../../hooks/useProfile";

const Profile = () => {
  const { isOpenProfileUser, SendhandleLogout, SendhandleProfile } =
    useProfile();

  console.log("PROFILEEEEE");
  return (
    <>
      {isOpenProfileUser && (
        <div className={style.navbar__profile}>
          <section className={style.navbar__profile__container}>
            <section className={style.navbarprofile_Encabezado}>
              Ver Perfil
            </section>

            <button
              onClick={SendhandleProfile}
              className={style.navbarprofile_item}
            >
              Mis Compras
            </button>
            <button
              onClick={SendhandleLogout}
              className={style.navbarprofile_item}
            >
              Logout
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Profile;
