import React from "react"
import styled from 'styled-components'

const StyledH1 = styled.h1 `
    font-size: 1.5rem;
    padding-top: 20px;
`
const Pagetitle = ({pagetitle}) => {
   return (
    <StyledH1>{pagetitle}</StyledH1>
   )
}

export default Pagetitle