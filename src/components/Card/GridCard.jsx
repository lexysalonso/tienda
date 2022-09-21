import React from 'react'
import style from "./card.module.css";
import Card from './Card';
import Spinner from '../Spinner/Spinner';
import { useGetPdroductsQuery } from "../../features/Products/productSlice";


const GridCard = () => {
  const { data: prodcuts, isError, isLoading } = useGetPdroductsQuery();
  console.log("ver producst", prodcuts ?? []);

  if (isLoading) {
    return (<Spinner />);
  }
  if (isError)
    return (
      <div>
        <p>Hubo un error</p>
      </div>
    );
  return (
    <div className={style.container}>
      <section className={style.grid}>
        {prodcuts.map((item, index) => (<Card key={index} item={item}></Card> ))}
      </section>
    </div>
  )  
}

export default GridCard;