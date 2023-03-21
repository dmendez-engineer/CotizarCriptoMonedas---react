import React from 'react'
import styled from '@emotion/styled'

const Mensaje=styled.div
`
background-color: red;
color: #FFF;
padding:15px;
font-size: 22px;
text-transform: uppercase;
font-family: 'Lato',sans-serif;
font-weight: bold;
text-align: center;

`

const Error = ({children}) => {
  return (
    <Mensaje>{children}</Mensaje>
  )
}

export default Error