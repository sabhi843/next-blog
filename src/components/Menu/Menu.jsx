import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts.jsx";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subTitle}>Discover By topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subTitle}>Chosen By the Editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
