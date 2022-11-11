import React from 'react'
import styles from "./Empyty.module.css"


export const Empyty = () => {
  return (
    <div className={styles.noexists}>
      <div>
        <p>No existe productos para esa categoria</p>
      </div>
      
    </div>
  );
}

