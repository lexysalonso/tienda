import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../features/ShoppingCard/shoppingCardSlice";

//import { useNavigate } from 'react-router-dom';
import {
  clearToCard,
  removeItemCard,
  addToCard,
} from "../features/ShoppingCard/shoppingCardSlice";

import { useTranslation } from "react-i18next";

const useShoppingCard = () => {
  const [t] = useTranslation("global");
  const dispatch = useDispatch();
  const card = useSelector(getCard);

  const getTotalMony = () =>
    card.reduce((acc, item) => (acc += item.price * item.quantity), 0);

  const handleAdd = (item) => {
    dispatch(addToCard(item));
  };
  const handleClaer = () => {
    dispatch(clearToCard());
  };

  const handleDelete = (item, change = false) => {
    let item1 = {
      item,
      change,
    };
    dispatch(removeItemCard(item1, change));
  };

  return {
    t,
    card,
    getTotalMony,
    handleAdd,
    handleClaer,
    handleDelete,
  };
};

export default useShoppingCard;
