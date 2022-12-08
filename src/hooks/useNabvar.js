import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "./useAuth";
import NavbarContext from "../context/NavbarContext";

const useNavbar = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("categoria");

  const { card } = useSelector((state) => state.card);
  const {  user, handleLogout } = useAuth();
  const {
    isOpenProfileUser,
    OpenProfileUser,
    CloseProfileUser,
    OpenMenuFilter,
    OpenShoppingCard,
  } = useContext(NavbarContext);

  const handleSearch = (e) => {
    navigate(`search?categoria=${e.target.value}`);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  console.log("DEAFULT USENAVBAR");

  return {
    isOpenProfileUser,
    OpenProfileUser,
    CloseProfileUser,
    OpenMenuFilter,
    OpenShoppingCard,
    user,
    handleLogout,
    searchvalue,
    card,
    handleSearch,
    handleLogin,
  };
};

export default useNavbar;
