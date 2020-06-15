import React from 'react'
import styled from 'styled-components'

const Title_react = styled.div`
font-size: 40px;
font-weight: 600;
margin-bottom: 10px;
color: rgb(35, 42, 240);
`

const Subtitle_react = styled.div`
font-size: 20px;
margin-bottom: 10px;
`

const ColoredLine = styled.hr`
  margin-bottom: 60px;
  color: rgb(39, 58, 222);
  
`

export default () => (
  <>
    <Title_react>Cookies</Title_react>
    <Subtitle_react>A searchable list of all your favorite cookies.</Subtitle_react>
    <ColoredLine />
  </>
)
