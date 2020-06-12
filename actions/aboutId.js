import axios from 'axios'

export default async (name) => {
  const { data } = await axios.get(`${API_BASE_URL}/cookies/${name}`)

  return data
}