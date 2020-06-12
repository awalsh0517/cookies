import React, { useState, useEffect } from 'react'
import GoBack from '../components/GoBack'
import Cookie from '../components/Cookie'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import CookieDetails from '../components/CookieDetails'
import Title from '../components/Title'
import { retrieveInfo } from '../utils/aboutId'

export default ({ location }) => {
  const [cookieName, setCookieName] = useState('')
  const [cookie, setCookie] = useState({})
  const [aboutList, setAboutList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, about } = await retrieveInfo(location)

      setCookieName(details.name)
      setCookie(details)
      setAboutList(about)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        cookieName
          ? (
            <>
              <CookieDetails name={cookie.name} />
              {aboutList.map(cookie => (
                <Cookie
                  key={cookie.id}
                  id={cookie.id}
                  name={cookie.name}
                  description={cookie.description}
                  aboutId={cookie.aboutId}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I do not know that cookie." />)
      }
    </Page>
  )
}
