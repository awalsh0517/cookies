import fetchInfoForCookies from '../actions/cookies'

export const getCookieNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/cookies/').pop()
  : ''
)

export const retrieveInfo = async (location) => {
  const cookieName = getCookieNameFromUrl(location)

  if (!cookieName) return { details: {}, aboutId: [] }

  const { id, name, description, aboutId } = await fetchInfoForCookies(cookieName)

  if (!id || !name || !description || !aboutId) return { details: {}, aboutId: [] }

  return { aboutId, details: { id, name, description, aboutId } }
}
