import React from 'react'
import {useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import {useGetProductsQuery} from "../../features/Products/productApi"
import { Link } from "react-router-dom";
import styles from "./details.module.css";
import {addToCard} from "../../features/ShoppingCard/shoppingCardSlice"


const DetailsProductsComponent = () => {
   const { id } = useParams();
   console.log("ver prodcuts iD", typeof id);
   const { product } = useGetProductsQuery(undefined, {
     selectFromResult: ({ data }) => ({
       product: data?.find((product) => product.id === Number(id)),
     }),
   });
   const dispatch = useDispatch()

   const handleAddtoCarrito =(product)=>{
      console.log("ver carito", product);
      dispatch(addToCard(product))
   }

   return (
     <>
       <div className={styles.title}>
         <h1>
           <cite>Características del producto</cite>
         </h1>
       </div>
       <section className={styles.container}>
         <article className={styles.details_image}>
           <div>
             <img
               className={styles.details_image_img}
               src={product?.image}
               alt=""
             />
           </div>
           <aside className={styles.details_image_description}>
             <div>
               <cite>Category:</cite> <p>{product?.category}</p>
             </div>
             <div>
               <cite>Precio:</cite> <p>${product?.price}</p>
             </div>
             <div>
               <cite>Cantidad:</cite> <p>{product?.rating.count}</p>
             </div>
           </aside>
         </article>
         <article className={styles.details_content}>
           <h1>{product?.title}</h1>
           <p> {product?.description}</p>
           <button onClick={()=>handleAddtoCarrito(product)}>Adicionar al Carrito</button>
           <Link className={styles.details_content_link} to="/">
             Regresar
           </Link>
         </article>
       </section>
     </>
   );
}

export default DetailsProductsComponent;