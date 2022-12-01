import { useContext } from 'react';
import NavbarContext from '../context/NavbarContext';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const useProfile = () => {
   const navigate = useNavigate()
   const { isOpenProfileUser, CloseProfileUser } = useContext(NavbarContext);

   const { handleLogout } = useAuth();

   const SendhandleLogout = () => {
     handleLogout();
     CloseProfileUser();
   };

   const SendhandleProfile = () => {
     navigate("/shoppinguser");
     CloseProfileUser();
   };

  return {
    isOpenProfileUser,
    SendhandleLogout,
    SendhandleProfile,
  };
}

export default useProfile