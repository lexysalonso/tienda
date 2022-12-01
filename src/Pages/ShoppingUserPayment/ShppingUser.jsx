import React from "react";
import useShoppingCardPayment from "../../hooks/useShoppingCardPayment";
import  style from "./ShoppingUser.module.css";
import Spinner from "../../components/Spinner";

const ShoppingUser = () => {
  const { dataperfil, isLoading } = useShoppingCardPayment();
  
  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <div>
        {dataperfil.map((prod, index) => (
          <section key={index} className={style.container}>
            <div>
              <em>Fecha que compro los productos</em>
              <p>{prod.date}</p>
            </div>
            <article className={style.container_products}>
              {prod.products.map((pu, index) => (
                <article key={index} className={style.products}>
                  <div>
                    <em>Precio</em>
                    <p>{pu.price}</p>
                  </div>
                  <div>
                    <em>Cantidad</em>
                    <p>{pu.quantity}</p>
                  </div>
                  <div>
                    <em>Nombre</em>
                    <p>{pu.title}</p>
                  </div>
                  <div className={style.imgcard}>
                    <img src={pu.image} alt="imagen del producto" />
                  </div>
                </article>
              ))}
            </article>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ShoppingUser;
