import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import CookieInfo from './CookieInfo'
import { filteredCookies, retrieveCookies, filterCookies } from '../utils/cookies'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cookieList, setCookieList] = useState([])
  const [filteredCookiesList, setFilteredCookiesList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await retrieveCookies()

      setCookieList(data)
      setFilteredCookiesList(data)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterCookies(cookieList, searchTerm)

    setFilteredCookiesList(filtered)
  }, [searchTerm])

  return (
    <div className="page_react">
      <div className="title_react">Cookies</div>
      <div className="subtitle_react">A searchable list of all your favorite cookies.</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredCookiesList.map(cookie => (<CookieInfo key={cookie.id} id={cookie.id} name={cookie.name} />))
      }
    </div>
  )
}
