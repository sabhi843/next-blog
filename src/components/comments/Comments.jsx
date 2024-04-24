import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="wrtie a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>1.1.1111</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad maxime
            corporis placeat cupiditate inventore earum, possimus quaerat sed ex
            expedita, eum dolorum et quasi. Voluptatem excepturi deleniti
            obcaecati neque ipsam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
