import { useState } from "react"

const useModal = (initialValue=null) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = ()=>  setIsOpen(true);
  

  const closeModal = ()=> setIsOpen(false)

  return [isOpen,openModal,closeModal] 
}

export default useModal;