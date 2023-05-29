import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Galaxy Shop</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
}
