import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const url = `${BACKEND_URL}/api/products`;

// Create new product

const createProduct = async (formData) => {
  const response = await axios.post(`` ,formData);
  return response.data;
};

const productService = {
    createProduct
}

export default productService