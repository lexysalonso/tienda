import React from 'react'
import styles from "./spinner.module.css"
import {FaSpinner}
from "react-icons/fa"

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60} />
    </div>
  );
}

export default Spinner