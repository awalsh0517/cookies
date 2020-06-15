import React from 'react'
import styled from 'styled-components'

const Cookie = styled.div`
font-size: 16px;
margin: 10px 0;
text-align: center;
`

export default ({ id, name, description, aboutId }) => (
  <Cookie key={id}>
    {`${name} ${description} ${aboutId}`}
  </Cookie>
)
