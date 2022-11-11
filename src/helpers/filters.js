

export const filterss = (filters, product) => {
  return product
    .filter((prod) =>
      filters.price === undefined
        ? prod
        : filters.price === "rango1"
        ? prod.price > 0 && prod.price <= 50
        : filters.price === "rango2"
        ? prod.price > 51 && prod.price <= 100
        : filters.price === "rango3"
        ? prod.price > 101 && prod.price <= 1000
        : filters.price === "All"
        ? prod
        : null
    )
    .filter((prod) =>
      filters.rate === undefined
        ? prod
        : filters.rate === "excelente"
        ? prod.rating.rate > 4
        : filters.rate === "muybuena"
        ? prod.rating.rate >= 3 && prod.rating.rate <= 4
        : filters.rate === "buena"
        ? prod.rating.rate > 1 && prod.rating.rate < 3
        : filters.rate === "All"
        ? prod
        : null
    );
};

