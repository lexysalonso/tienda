import { Link } from "react-router-dom";
import styles from "./details.module.scss";

import useDetailsProduct from '../../../hooks/useDetailsProduct';

const DetailsProductsComponent = () => {
   const {t, product, handleAddtoCard } = useDetailsProduct();

  return (
    <>
      <div className={styles.title}>
        <h1>
          <cite>{t("DetailsProducts.caractProduct")}</cite>
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
              <cite>{t("Card.Categoria")}</cite> <p>{product?.category}</p>
            </div>
            <div>
              <cite>{t("Card.Precio")}</cite> <p>${product?.price}</p>
            </div>
            <div>
              <cite>{t("Card.Cantidad")}</cite> <p>{product?.rating.count}</p>
            </div>
          </aside>
        </article>
        <article className={styles.details_content}>
          <h1>{product?.title}</h1>
          <p> {product?.description}</p>

          <button onClick={() => handleAddtoCard(product)}>
            {t("DetailsProducts.addCarrito")}
          </button>
          <Link className={styles.details_content_link} to="/">
            {t("DetailsProducts.regresar")}
          </Link>
        </article>
      </section>
    </>
  );
};

export default DetailsProductsComponent;
