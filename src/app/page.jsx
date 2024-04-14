import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/CardList/CardList";

export default function Home() {
  return (
    <div className={styles.conatiner}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
      </div>
    </div>
  );
}
