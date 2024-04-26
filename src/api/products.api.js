import axios from "axios";

export const getProductsRequest = async () =>
  await axios.get("http://localhost:3000/products");

export const createProductRequest = async (product) =>
  await axios.post("http://localhost:3000/products", product);

export const deleteProductRequest = async (id) =>
  await axios.delete(`http://localhost:3000/products/${id}`);

export const getProductRequest = async (id) =>
  await axios.get(`http://localhost:3000/products/${id}`);

export const updateProductRequest = async (id, newFields) =>
  await axios.put(`http://localhost:3000/products/${id}`, newFields);

export const toggleProductDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:3000/products/${id}`, {
    done,
  });