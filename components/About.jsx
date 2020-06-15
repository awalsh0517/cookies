import React from 'react'
import styled from 'styled-components'

const About = styled.div`
font-size: 16px;
margin: 10px 0;
text-align: center;
`

export default ({ id, type, batchSize }) => (
  <About key={id}>
    {`${type} ${batchSize}`}
  </About>
)
