
export const getProductxID = (productcard, productCache) => {
  console.log("PRODUCTCARD",productcard)
  console.log("PRODUCTCARD CACHE", productCache);
  let result = {};
  let storage = productcard.map((product) => {
    let date = product.date.split("",10).join("").split("-").reverse().join("-")
    console.log("ver DATE", date)
    let resp = product.products.map((prod) => {
      let re =
        productCache && productCache.find((pca) => pca.id === prod.productId);
      result = re && {
        price: re.price,
        quantity: prod.quantity,
        title: re.title,
        image:re.image
      };
      return result;
    });
    return { ...product, date:date, products: [...resp] };
  });
  console.log("ver Sotroage", storage);
  return storage
  
};
