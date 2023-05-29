import CategoryCard from "../components/CategoryCard";
import styles from "../components/styles/Home.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard
          image="https://imgur.com/uDiTVWg.jpeg"
          name="The Spanish Dancer Spiral Galaxy"
        />
        <CategoryCard
          image="https://imgur.com/BgtxEg4.jpeg"
          name="The Helix Nebula from CFHT"
        />
        <CategoryCard
          image="https://imgur.com/FX7vZx6.jpeg"
          name="The Medulla Nebula Supernova Remnant"
        />
      </div>
      <div className={styles.large}>
        <CategoryCard
          image="https://imgur.com/H9QiEyd.jpeg"
          name="To Fly Free in Space"
        />
        <CategoryCard
          image="https://imgur.com/YXYHViX.jpeg"
          name="To get chance walk on moon"
        />
      </div>
    </main>
  );
}
