import CategoryCard from "../components/CategoryCard";
import styles from "../components/styles/Home.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uDiTVWg.jpeg" name="galaxy" />
        <CategoryCard image="https://imgur.com/vfA7gxI.jpegg" name="planet" />
        <CategoryCard image="https://imgur.com/z1pehrT.jpeg" name="souvenir" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/H9QiEyd.jpeg" name="activity" />
        <CategoryCard image="https://imgur.com/YXYHViX.jpeg" name="species" />
      </div>
    </main>
  );
}
