 import  { useState } from "react";
 import { useUserLoginMutation } from "../features/User/userApi";
 import { useDispatch } from "react-redux";
 import { useSelector } from "react-redux";
 import { logoutUser } from "../features/User/userSlice";
 import { useNavigate } from "react-router-dom"; 
 import Storage from "./Storage"

 
 export const useAuth = () => {
    const [form, SetForm] = useState({
      username: "",
      password: "",
    });
    const sotrage = Storage()
    const [createPost, { reset , error, isError , isLoading, isSuccess }] =
      useUserLoginMutation();

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state) => state);
    const { loggee,user } = state.user;

    console.log("ver logge", user);


    const handlechange = (e) => {
      SetForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("login", form);
      await createPost(form).unwrap();
     // save(Keys.auth,res?.token);
     // dispatch(loginUser(res.token))
     // console.log("ver info token",jwt_decode(res.token,true))
    };

    const handleLogout =()=>{
      console.log("dasdasd")
      sotrage.remove(sotrage.Keys.auth);
      dispatch(logoutUser())
      navigate("/login")
    }
    
   return {
     form,
     reset,
     loggee,
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
  }