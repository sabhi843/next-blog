import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt=" " fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.11.1111</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt=" " fill className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div lassName={styles.description}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eaque similique fuga odit cumque provident ipsa accusantium. Culpa
              asperiores soluta temporibus reiciendis. Minima placeat eum cumque
              vel ipsa fuga voluptates.
            </p>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam sapiente officia, iste ut nam minus esse molestias quae
              soluta magnam impedit rerum quidem exercitationem! Culpa ducimus
              quaerat molestiae autem nobis.
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eaque similique fuga odit cumque provident ipsa accusantium. Culpa
              asperiores soluta temporibus reiciendis. Minima placeat eum cumque
              vel ipsa fuga voluptates.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
