import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/Products/productApi";
import useAuth from "./useAuth";
import Toast from "../components/Toast";
import useShoppingCard from "./useShoppingCard";
import { useTranslation } from "react-i18next";

const useDetailsProduct = () => {
  const [t] = useTranslation("global");

  const { user } = useAuth();
  const { handleAdd } = useShoppingCard();

  const [disable, setDisable] = useState(null);
  const { id } = useParams();

  const { product } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      product: data?.find((product) => product.id === Number(id)),
    }),
  });

  const handleAddtoCard = (product) => {
    return disable ? handleAdd(product) : Toast.Toast_Info(t("login.sms_auth"));
  };

  useEffect(() => {
    if (!user) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  return {
    t,
    product,
    handleAddtoCard,
  };
};

export default useDetailsProduct;
