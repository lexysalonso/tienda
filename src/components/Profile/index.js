import React from "react";
import style from "./Profile.module.scss";
import useProfile from "../../hooks/useProfile";

const Profile = () => {
  const { t, isOpenProfileUser, SendhandleLogout, SendhandleProfile } =
    useProfile();

  console.log("PROFILEEEEEf");
  return (
    <>
      <div
        className={
          style.navbar__profile +
          " " +
          (isOpenProfileUser ? style.navbar__profileshow : "")
        }
      >
        <section className={style.navbar__profile__container}>
          <section className={style.navbarprofile_Encabezado}>
            {t("Profile.verPerfil")}
          </section>

          <button
            onClick={SendhandleProfile}
            className={style.navbarprofile_item}
          >
            {t("Profile.misCompras")}
          </button>
          <button
            onClick={SendhandleLogout}
            className={style.navbarprofile_item}
          >
            {t("Profile.cerrarSesion")}
          </button>
        </section>
      </div>
    </>
  );
};

export default Profile;
