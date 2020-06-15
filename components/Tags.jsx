import React from 'react'
import styled from 'styled-components'

const Tags = styled.div`
font-size: 16px;
margin: 10px 0;
text-align: center;
`

export default ({ id, tag }) => (
  <Tags key={id}>
    {`${tag}`}
  </Tags>
)
