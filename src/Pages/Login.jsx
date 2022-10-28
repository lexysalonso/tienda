import React from "react";
import styles from "./login.module.css";
//import { useUserLoginMutation } from "../features/User/userSlice";
import useAuth  from "../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
//import Spinner from "../components/Spinner/Spinner";
const Login = () => {
  const { form, reset, error, isError, isLoading ,handlechange, handleSubmit } =
    useAuth();
   
     
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
        <strong className={styles.login_title}>My Shoping</strong>
        <form
          onSubmit={handleSubmit}
          className={styles.login_form}
          autoComplete="new-password"
        >
          <input
            type="text"
            placeholder="username"
            spellCheck={true}
            required
            onChange={handlechange}
            name="username"
            value={form.username}
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Password"
            spellCheck={true}
            required
            onChange={handlechange}
            name="password"
            value={form.password}
            autoComplete="new-password"
          />
          <button onClick={reset} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
