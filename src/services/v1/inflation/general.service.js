import axios from 'axios';

export async function getGeneralInflationsService() {
  const response = await axios.get(`http://localhost:4000/api/v1/inflations`);

  return response.data;
}
