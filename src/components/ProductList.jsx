import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="products-section">
      <h2>🛍️ Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;