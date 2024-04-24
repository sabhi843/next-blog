import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2014 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{item?.title}</h1>
        </Link>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          molestiae doloremque saepe earum nesciunt, voluptates maiores, minima
          explicabo molestias magnam culpa? Expedita dolorem, error cum
          accusantium sed repellat. Neque, dicta!
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
