import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import styles from "../../components/styles/ShopPage.module.css";
import { getProductsByCategory } from "../api/products/[category]";

export default function CategoryPage({ products }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
