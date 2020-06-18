import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`

const Details2 = styled.div`
  font-size: 20px;
  margin: 40px 60px;
  text-align: center;
`
export default ({ name, description, type, batchSize, tags }) => {

  return (
    <>
      <Details>{`${name}`}</Details>
      <Details2> {`${description}`}</Details2>
      <Details2> {`Cookie Type: ${type}`}</Details2>
      <Details2> {`Batch Size: ${batchSize}`}</Details2>
    </>
  )
}
