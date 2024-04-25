import { Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductForm from "./pages/ProductForm";
import NotFound from "./pages/NotFound";
import { ProductContextProvider } from "./context/ProductProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/new" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductContextProvider>
      </div>
    </div>
  );
}

export default App;