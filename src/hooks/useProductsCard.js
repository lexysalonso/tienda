import { useNavigate } from "react-router-dom";

const useCard = () => {
  const navigate = useNavigate();

  const handleSendId = (id) => {
    navigate(`details/${id}`);
  };

  return {
    handleSendId,
  };
};

export default useCard;
