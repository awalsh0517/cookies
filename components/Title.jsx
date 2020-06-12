import React from 'react'
import styled from 'styled-components'

const Title_react = styled.div`
font-size: 24px;
font-weight: 600;
margin-bottom: 20px;
`

const Subtitle_react = styled.div`
font-size: 20px;
`

export default () => (
  <>
    <Title_react>Cookies</Title_react>
    <Subtitle_react>A searchable list of all your favorite cookies.</Subtitle_react>
  </>
)
