import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import CookieInfo from '../components/CookieInfo'
import Title from '../components/Title'
import { retrieveCookies, filterCookies } from '../utils/cookies'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cookieList, setCookieList] = useState([])
  const [filteredCookiesList, setFilteredCookiesList] = useState([])

  useEffect(() => {
    async function pullData() {
      const cookies = await retrieveCookies()

      setCookieList(cookies)
      setFilteredCookiesList(cookies)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterCookies(cookieList, searchTerm)

    setFilteredCookiesList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredCookiesList.map(cookie => (<CookieInfo key={cookie.id} id={cookie.id} name={cookie.name} />))
      }
    </Page>)
}
