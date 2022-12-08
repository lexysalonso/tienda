import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "./useAuth";
import NavbarContext from "../context/NavbarContext";
import { useTranslation } from "react-i18next";

const useNavbar = () => {
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("categoria") ?? "";
  const { card } = useSelector((state) => state.card);
  const { user, handleLogout } = useAuth();
  const [t, i18n] = useTranslation("global");

  const {
    isOpenProfileUser,
    OpenProfileUser,
    CloseProfileUser,
    OpenMenuFilter,
    OpenShoppingCard,
    isOpenShoppingCard,
    CloseShoppingCard,
  } = useContext(NavbarContext);

  const handleSearch = (e) => {
    navigate(`search?categoria=${e.target.value}`);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  console.log("DEAFULT USENAVBAR");

  const handleSpanichLanguage = () => {
    i18n.changeLanguage("es");
  };

  const handleInglishLanguage = () => {
    i18n.changeLanguage("en");
  };

  const handleCheckout = (checked) => {
    checked ? handleInglishLanguage() : handleSpanichLanguage();
    setCheckout(checked);
  };
  console.log("ver checkout", checkout);

  return {
    isOpenProfileUser,
    OpenProfileUser,
    CloseProfileUser,
    OpenMenuFilter,
    OpenShoppingCard,
    isOpenShoppingCard,
    CloseShoppingCard,
    user,
    handleLogout,
    searchvalue,
    card,
    handleSearch,
    handleLogin,
    handleCheckout,
    checkout,
    t,
  };
};

export default useNavbar;
