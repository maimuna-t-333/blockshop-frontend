import axios from "axios";

// const BASE_URL = process.env.BACKEND_API_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;


export const fetchProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const fetchProductById = async (id) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
};

export const addProduct = async (product, token) => {
  const res = await axios.post(`${BASE_URL}/products`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
