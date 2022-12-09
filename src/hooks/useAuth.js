import { useState, useCallback } from "react";
import { useUserLoginMutation } from "../features/User/userApi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getUser } from "../features/User/userSlice";

const useAuth = () => {
  const [t] = useTranslation("global");
  console.log("SE EJECUTO");
  const [form, SetForm] = useState({
    username: "",
    password: "",
  });
  /*  const [userlocalStorage, SetUser] = useState(
    storage.load(storage.Keys.auth)
      ? jwt_decode(storage.load(storage.Keys.auth))
      : { user: null }
  ); */

  const { user } = useSelector(getUser);
  console.log("ver user", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, { reset, error, isError, isLoading, isSuccess }] =
    useUserLoginMutation();

  const handlechange = (e) => {
    SetForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("login", form);
      await userLogin(form).unwrap();
      navigate("/");
    },
    [userLogin, navigate, form]
  );

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    navigate("/login");
  }, [dispatch, navigate]);

  /*  useEffect(() => {
    SetUser(
      storage.load(storage.Keys.auth)
        ? jwt_decode(storage.load(storage.Keys.auth))
        : { user: null }
    );
  }, [navigate]); */

  return {
    t,
    form,
    reset,
    user,
    error,
    isError,
    isSuccess,
    isLoading,
    SetForm,
    handlechange,
    handleSubmit,
    handleLogout,
  };
};

export default useAuth;
