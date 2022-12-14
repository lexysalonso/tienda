import { useContext } from "react";
import { useGetCategoryQuery } from "../features/Products/productApi";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import NavbarContext from "../context/NavbarContext";
import { useTranslation } from "react-i18next";

const useFilter = () => {
  const [filters, setFilters] = useState(null);
  const navigate = useNavigate();
  const { isOpenMenuFilter, CloseMenuFilter } = useContext(NavbarContext);
  const [t] = useTranslation("global");
  const { data } = useGetCategoryQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    CloseMenuFilter();
  };

  const handleClick = () => {
    filters &&
      navigate({
        pathname: "filter",
        search: createSearchParams(filters).toString(),
      });
  };

  return {
    isOpenMenuFilter,
    CloseMenuFilter,
    data,
    handleChange,
    handleClick,
    filters,
    t,
  };
};

export default useFilter;
