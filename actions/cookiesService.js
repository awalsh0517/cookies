import axios from 'axios'

export const getCookies = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/cookies`)
  return data
}

export const getCookieByName = async () => {
  const pathList = window.location.pathname.split('/')
  const cookieName = pathList[pathList.length - 1]
  if (!cookieName) throw new Error('Unable to get cookie name from URL')
  const { data } = await axios.get(`${API_BASE_URL}/cookies/name/${cookieName}`)
  return data
}