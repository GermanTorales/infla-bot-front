import axios from 'axios';

export async function getProductService(id) {
  const response = await axios.get(`http://localhost:4000/api/v1/products/${id}`);

  return response.data;
}
