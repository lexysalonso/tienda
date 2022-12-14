import { useCallback } from "react";
import { useLazyGetProductCardQuery } from "../features/Products/productApi";
import { getProductCache } from "../features/Products/productApi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductxID } from "../helpers/perfilParse";
import { useLazyGetAllUserQuery } from "../features/User/userApi";
import useAuth from "./useAuth";

const useShoppingCardPayment = () => {
  const [dataperfil, setDataPerfil] = useState([]);
  const [userr, setUser] = useState(null);
  const { user } = useAuth();

  const { data: productCache } = useSelector(getProductCache.select());

  const [trigger, { data: productcard, isLoading }] =
    useLazyGetProductCardQuery();

  const [triggerUser, { data: productall }] = useLazyGetAllUserQuery();

  const getFindUser = useCallback(() => {
    console.log("VER PRODUCTALL", productall);
    setUser(
      productall && productall.find((elem) => elem.username.includes(user))
    );
  }, [productall, user]);

  console.log("verUser", user);

  useEffect(() => {
    triggerUser().unwrap();
    getFindUser();
    userr && trigger(userr?.id).unwrap();
    productcard &&
      productCache &&
      setDataPerfil(getProductxID(productcard, productCache));
  }, [
    trigger,
    getFindUser,
    triggerUser,
    productall,
    userr,
    productcard,
    productCache,
  ]);

  //  productCache && productCache.find((prod) => prod.id === productid);

  console.log("ver product cache", dataperfil);

  return {
    isLoading,
    dataperfil,
  };
};

export default useShoppingCardPayment;
