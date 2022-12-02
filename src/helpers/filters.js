

export const filterss = (paramsprice,paramsrate, product) => {
  return product
    .filter((prod) =>
      paramsprice === null
        ? prod
        : paramsprice === "rango1"
        ? prod.price > 0 && prod.price <= 50
        : paramsprice === "rango2"
        ? prod.price > 51 && prod.price <= 100
        : paramsprice === "rango3"
        ? prod.price > 101 && prod.price <= 1000
        : paramsprice === "All"
        ? prod
        : null
    )
    .filter((prod) =>
      paramsrate === null
        ? prod
        : paramsrate === "excelente"
        ? prod.rating.rate > 4
        : paramsrate === "muybuena"
        ? prod.rating.rate >= 3 && prod.rating.rate <= 4
        : paramsrate === "buena"
        ? prod.rating.rate > 1 && prod.rating.rate < 3
        : paramsrate === "All"
        ? prod
        : null
    ); 
};

