import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


const useCard = () => {
  const [counts, setCount] = useState();
  const [open, SetOpen] = useState(true);
  const [search, setSearch] = useState(null)
  

  const sumar = useCallback(() => setCount(counts + 1), [counts]);
  const navigate = useNavigate();


  const handleSetOpen = () => {
    SetOpen(false);
    console.log("success");
    //console.log("ver locations", locations);
  };
   const handleSubmit = (e) => {
     e.preventDefault()
     navigate(`search?categoria=${search}`);
     console.log("submit");
     //console.log("ver locations", locations);
   };

   const handleSearch = (e) => {
    setSearch(e.target.value);   
    navigate(`search?categoria=${e.target.value}`);
   }
  /* let obj = {
    category: "jewelery",
    apellidos: null,
    edad: null,
  };
  const hola = async (data) => {
let result = await fetch(
  `https://fakestoreapi.com/products/${data.campo}/${data.value}`
);
let categorys = await result.json()
  console.log("ver categories", categorys)
  return categorys;
  }
  
      
;
  const handleManger = () => {
    let data = Object.keys(obj).map(
      (el) =>
        obj[el] !== null && {
          campo: el,
          value: obj[el],
        }
    );
    data.forEach((el) => {
      switch (el.campo) {
        case "category": {
            return hola(el);
        }
        case "apellidos": {
          console.log("Apellidos");
        }
        case "edad": {
          console.log("Edad");
        }
        default:
          return "";
      }
    });
  }; */

  return {
    search,
    sumar,
    handleSubmit,
    handleSetOpen,
    handleSearch,
    open,
    SetOpen,
    
  };
};

export default useCard;
