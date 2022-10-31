import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import {
  clearToCard,
  removeItemCard,
  addToCard,
} from "../features/ShoppingCard/shoppingCardSlice";


const useShoppingCard = () => {
  
   const dispatch = useDispatch();

   const { card } = useSelector((state) => state.card);

   const getTotalMony = () => card.reduce((acc, item) => acc += item.price * item.quantity, 0);
     
   ;
   const handleSubmit = (item) => {
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
    card,
    getTotalMony,
    handleSubmit,
    handleClaer,
    handleDelete,
  };
}

export default useShoppingCard;