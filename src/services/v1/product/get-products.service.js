import axios from 'axios';

export async function getProductsService() {
  const response = await axios.get(`http://localhost:4000/api/v1/products`);

  return response.data;
}
