import axios from 'axios'

export default async () => {
  const { data } = await axios.get(`${API_BASE_URL}/cookies`)

  return data
}
