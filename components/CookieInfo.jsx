import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Cookie = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

const Link = styled(NavLink)`
  text-decoration: none;
`

export default ({ id, name }) => (
  <Cookie key={id}>
    <Link to={`/cookies/name/${name}`}>{`${name}`}</Link>
  </Cookie>
)
