import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useNavbar = () => {
 
  const [open, SetOpen] = useState(true);
  const [search, setSearch] = useState(null)
  const [openModal,SetOpenModal] = useState(false)

  const {card} = useSelector((state)=>state.card)

  const navigate = useNavigate();
  
   const handleShopping= ()=>{
   console.log("Se ejecuto")
   SetOpenModal(!openModal);
  }


  const handleSetOpen = () => {
    SetOpen(false);
    console.log("success");
    
  };
  
   const handleSearch = (e) => {
    setSearch(e.target.value);   
    navigate(`search?categoria=${e.target.value}`);
   }

   
  

  return {
    card,
    search,
    handleSetOpen,
    handleSearch,
    handleShopping,
    open,
    SetOpen,
    openModal,
  };
};

export default useNavbar;
