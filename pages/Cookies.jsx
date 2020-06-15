import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import CookieInfo from '../components/CookieInfo'
import Title from '../components/Title'
import { getCookies } from '../actions/cookiesService'
import { filterCookies } from '../utils/cookies'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cookieList, setCookieList] = useState([])
  const [filteredCookiesList, setFilteredCookiesList] = useState([])

  const handleFilterChange = event => {
    setSearchTerm(event.target.value)
    setFilteredCookiesList(filterCookies(cookieList, event.target.value))
  }

  useEffect(() => {
    getCookies().then(response => {
      setCookieList(response)
      setFilteredCookiesList(response)
    }).catch(() => {

    })
  }, [])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} handleChange={handleFilterChange} />
      {
        filteredCookiesList.map(cookie => (
          <CookieInfo
            key={cookie.id}
            id={cookie.id}
            name={cookie.name}
          />))
      }
    </Page>)
}
