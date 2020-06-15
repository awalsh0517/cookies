import React, { useState, useEffect } from 'react'
import GoBack from '../components/GoBack'
// import Cookie from '../components/Cookie'
// import About from '../components/About'
// import Tags from '../components/Tags'
// import NotFound from '../components/NotFound'
import Page from '../components/Page'
import CookieDetails from '../components/CookieDetails'
import Title from '../components/Title'
import { getCookieByName } from '../actions/cookiesService'

export default () => {
  const [cookie, setCookie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getCookieByName().then(response => {
      setCookie(response)
      console.log(response)

      setIsLoading(false)
    }).catch(() => {
      setIsError(true)
      setIsLoading(false)
    })
  }, [])

  return (
    <Page>
      <Title />
      {isLoading && <>Loading Component</>}
      {!isLoading && isError && <>Error Component</>}
      {!isLoading && !isError && <>
        <CookieDetails
          name={cookie.name}
          description={cookie.description}
          type={cookie.about.type}
          batchSize={cookie.about.batchSize}
        // tags={cookie.tags}
        />
      </>
      }
      <GoBack />

    </Page>
  )
}
