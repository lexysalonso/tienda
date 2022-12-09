import React from "react";
import styles from "./login.module.css";
//import { useUserLoginMutation } from "../features/User/userSlice";
import useAuth from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
//import Spinner from "../components/Spinner/Spinner";
import Toast from "../../components/Toast";
const Login = () => {
  const {t, form, reset, error, isError, isLoading,isSuccess, handlechange, handleSubmit } =
    useAuth();
  
   if(isSuccess){
     return Toast.Toast_Success(t("login.sms"));
   } 
   
  return (
    <>
      <div className={styles.login}>
        {isError && <p className={styles.error}>{error.data}</p>}
        {isLoading && (
          <FaSpinner
            color="green"
            className={styles.spinning}
            size={40}
          ></FaSpinner>
        )}
        <strong className={styles.login_title}>{ t("Profile.misCompras")}</strong>
        <form
          onSubmit={handleSubmit}
          className={styles.login_form}
          autoComplete="new-password"
        >
          <input
            type="text"
            placeholder=" "
            spellCheck={true}
            required
            onChange={handlechange}
            name="username"
            value={form.username}
            autoComplete="new-password"
            className={styles.login_input}
            id="name"
          />
          <label htmlFor="name" className={styles.login_label}>
            {t("login.usuario")}
          </label>
          <input
            type="password"
            placeholder=" "
            spellCheck={true}
            required
            onChange={handlechange}
            name="password"
            value={form.password}
            autoComplete="new-password"
            className={styles.login_input}
            id="paswword"
          />
          <label htmlFor="paswword" className={styles.password_label}>
            {t("login.contraseña")}
          </label>
          <button onClick={reset} type="submit">
            {t("header.abrirSesion")}
          </button>
        </form>
      </div>
    </>
  );
};

export  default Login ;
