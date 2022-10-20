import { useState, useEffect,useCallback } from "react";
import { useUserLoginMutation } from "../features/User/userApi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import Storage from "./Storage";
import jwt_decode from "jwt-decode";

const storage = Storage();

export const useAuth = () => {
  console.log("SE EJECUTO");
  const [form, SetForm] = useState({
    username: "",
    password: "",
  });
  const [userlocalStorage, SetUser] = useState(storage.load(storage.Keys.auth)
      ? jwt_decode(storage.load(storage.Keys.auth))
      : { user: null });


  const [createPost, { reset, error, isError, isLoading, isSuccess }] =
    useUserLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { loggee, user } = state.user;

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
      await createPost(form).unwrap();
      navigate("/");
    },
    [createPost,navigate,form]
  );

  const handleLogout =useCallback(() => {
    console.log("dasdasd");
    storage.remove(storage.Keys.auth);
    dispatch(logoutUser());
    navigate("/login");
  },[dispatch,navigate]);

  useEffect(() => {
    SetUser(storage.load(storage.Keys.auth)
      ? jwt_decode(storage.load(storage.Keys.auth))
      : { user: null });
  }, [handleSubmit, handleLogout]);
    
  return {
    form,
    reset,
    loggee,
    user,
    error,
    isError,
    isSuccess,
    isLoading,
    userlocalStorage,
    SetForm,
    handlechange,
    handleSubmit,
    handleLogout,
  };
};
