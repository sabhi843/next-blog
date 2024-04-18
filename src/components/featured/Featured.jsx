import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey! , abhi here discover my stories and creative ideas.</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam reprehenderit voluptate perspiciatis. Inventore ea nisi
            est, eos quia facilis, ex incidunt aliquid modi quibusdam sint,
            velit accusamus dolore possimus?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
