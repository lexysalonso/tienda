import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import {Outlet} from "react-router-dom"
import styles from "./landing.module.css"



/* const LNavbar1 = () => {
  return (
    <div
      style={{
        width: "100%",
        
        borderBottom: "thin solid black",
        padding: "1rem",
        position: "fixed",
        top: "4rem",
      }}
    >
      Navbar1
    </div>
  );
} */




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