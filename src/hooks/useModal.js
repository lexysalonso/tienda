import { useState } from "react"

const useModal = (initialValue=false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = (e)=> {
    console.log("openmodal", );  
    if (e.target.matches("#openModal")) {
      // var elemt = e.target
       var element = document.getElementById("myDIV");
       console.log(element);
    }
    
    return setIsOpen(true);
  }

  const closeModal = ()=> setIsOpen(false)

  return [isOpen,openModal,closeModal] 
}

export default useModal;