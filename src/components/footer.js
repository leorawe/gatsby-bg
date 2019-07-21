import React from "react"
import styled from 'styled-components'

import media from './mediaqueries'

const BigFooter = styled.footer`
    background-color: black;
    color: white;
    .footer-wrapper {
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        div{
            flex: 1 1 50%;
            padding: 40px;
            &.email {text-align: right;}
        }
    }
   ${media.phone`
   .footer-wrapper {
       flex-direction: column;
       div {
           flex: 1 0 100%;
           padding: 20px;
           text-align: center;
           &.email {text-align: center;}
           }
  `} 
`

const StyledAnchor = styled.a `
      color: white;
      &:hover {
        color: #7556be;
      }
`

const Footer = () => (
    <BigFooter>
        <div class="footer-wrapper">
            <div>P: 732-220-8844</div>
            <div class="email"><StyledAnchor href="mailto:barbaragelfand@gmail.com"><strong>barbaragelfand@gmail.com</strong></StyledAnchor></div>
        </div>
    </BigFooter>
)

export default Footer