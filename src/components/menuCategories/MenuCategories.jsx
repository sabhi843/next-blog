import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        coding
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        food
      </Link>
    </div>
  );
};

export default MenuCategories;
