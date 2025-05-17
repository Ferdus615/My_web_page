import styles from "./Home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={styles.container}>
      <nav>
        <img src="/FRK.svg" alt="logo" width="100px" />
      </nav>
      <div className={styles.intro_container}>
        <h1 className={styles.intro}>
          <span className={styles.greetings}>Hi, there I am</span>

          <span className={styles.first_name}>Ferdus Rhaman</span>

          <span className={styles.last_name}>Khan.</span>

          <p className={styles.info}>
            Programmer, <br />
            Web Developer & <br />
            Graphic Designer.
          </p>
        </h1>
      </div>

      <div className={styles.bottom_line}>
        <div className={styles.location}>From Dhaka, Bangladsh</div>
        <a className={styles.contact_btn} href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;
