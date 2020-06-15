export const filterCookies = (list, term) => list.filter(cookie => (
  cookie.name.toLowerCase().includes(term.toLowerCase())
))
