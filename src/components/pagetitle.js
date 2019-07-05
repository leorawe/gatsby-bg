import React from "react"
import styled from 'styled-components'

const StyledH1 = styled.h1 `
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #cecece;
`
const Pagetitle = ({pagetitle}) => {
   return (
    <StyledH1>{pagetitle}</StyledH1>
   )
}

export default Pagetitle