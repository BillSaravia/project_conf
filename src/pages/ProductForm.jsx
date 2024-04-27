import { Form, Formik } from "formik";
import { useProducts } from "../context/ProductProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductForm() {
  const { createProduct, getProduct, updateProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProduct(params.id);
        console.log(product);
        setProduct({
          name: product.name,
          description: product.description,
          quantity: product.quantity,
          price: product.price,
        });
      }
    };
    loadProduct();
  }, []);

  return (
    <div>
      <Formik
        initialValues={product}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProduct(params.id, values);
          } else {
            await createProduct(values);
          }
          navigate("/");
          setProduct({
            name: "",
            description: "",
            quantity: "",
            price: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Product" : "New Product"}
            </h1>
            <label className="block">name</label>
            <input
              type="text"
              name="name"
              placeholder="Write a name"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.name}
            />

            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>

            <label className="block">quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Write a quantity"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.quantity}
            />

            <label className="block">price</label>
            <input
              type="text"
              name="price"
              placeholder="Write a price"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.price}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;