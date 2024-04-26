import axios from 'axios';

export async function getChartPriceService(id) {
  const response = await axios.get(`http://localhost:4000/api/v1/charts/price/${id}`);

  return response.data;
}
