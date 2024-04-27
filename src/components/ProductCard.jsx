import { useProducts } from "../context/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct, toggleProductDone } = useProducts();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleProductDone(product.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{product.name}</h2>
        <span>{product.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{product.description}</p>
      <p className="text-xs">{product.quantity}</p>
      <p className="text-xs">{product.price}</p>
      <span>{product.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${product.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(product.done)}
        >
          Toggle Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;