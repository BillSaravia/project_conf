import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

function ProductsPage() {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  function renderMain() {
    if (products.length === 0) return <h1>No products yet</h1>;
    return products.map((product) => <ProductCard product={product} key={product.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Products</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default ProductsPage;