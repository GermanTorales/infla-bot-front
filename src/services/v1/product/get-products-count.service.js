import axios from 'axios';

export async function getProductCountService() {
  const response = await axios.get(`http://localhost:4000/api/v1/products/count`);

  return response.data;
}
