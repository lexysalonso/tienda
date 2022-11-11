import React from 'react'
import Navbar from '../../components/Navbar';
import {Outlet} from "react-router-dom"
import styles from "./landing.module.css"

const LandingPages = () => {
  
  return (
    <>
      <header className={styles.navbar}>
        <Navbar></Navbar>
      </header>

      <section className={styles.content}>
        <Outlet />
      </section>
      
    </>
  );
}

export default LandingPages ;