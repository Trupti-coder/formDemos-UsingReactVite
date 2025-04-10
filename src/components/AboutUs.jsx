import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/blurBook.webp"
            alt="Open book in library"
            width={1200}
            height={600}
            className={styles.image}
          />
        </motion.div>
        <CardContent className={styles.content}>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
