import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 16px;
  border-radius: 8px;
  padding: 5px;
  margin: 20px 0;
  outline: none;
`

export default ({ term, handleChange }) =>
  <Input type="text" name="search" value={term} onChange={handleChange} />
