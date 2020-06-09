import fetchCookies from '../actions/cookies'

export const filterCookies = (list, term) => list.filter(cookie => (
  cookie.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveCookies = async () => {
  const cookies = await fetchCookies()

  return cookies
}
