import { useState } from "react"

const useModal = (initialValue=null) => {
  console.log("DEFAULT USEMODAL")
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = ()=>  setIsOpen(true);
  

  const closeModal = ()=> setIsOpen(false)

  return [isOpen,openModal,closeModal] 
}

export default useModal;