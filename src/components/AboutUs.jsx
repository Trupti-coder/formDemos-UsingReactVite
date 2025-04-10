import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroText}>Welcome to Our Bookstore</h1>
        <p className={styles.subText}>Discover stories that inspire, comfort, and captivate.</p>
      </div>
      <div className={styles.contentSection}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to our bookstore, a haven for book lovers of all ages. Our mission is to foster a love for reading and to create a warm, welcoming space where stories come to life.
        </p>
        <p className={styles.paragraph}>
          Whether you're seeking the latest bestseller, a timeless classic, or a cozy corner to unwind, our curated selection and knowledgeable staff are here to guide you.
        </p>
        <p className={styles.paragraph}>
          Thank you for being a part of our community. Let's explore the world, one page at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
