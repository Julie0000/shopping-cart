import Link from "next/link";
import Image from "next/image";
import styles from "./styles/CategoryCard.module.css";

export default function CategoryCard({ image, name }) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.shopnow}>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
}
