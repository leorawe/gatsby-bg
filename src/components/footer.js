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
        flex-wrap: wrap;
        div{
            flex: 1 0 30%;
            padding: 40px 0;
            &.email {text-align: right;}
            &.phone {
            font-size: 1.15rem;
            }
        }
    }
   ${media.desktop`
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
      border-bottom: 1px solid white;
      text-decoration: none;
      font-weight: 400;
      font-size: 1.15rem;
      &:hover {
        border-bottom: 1px solid #7556be;
      }
`

const Footer = () => (
    <BigFooter>
        <div class="footer-wrapper">
            <div class="phone">P: (732) 220-8844</div>
            <div class="website"><StyledAnchor href="https://barbaragelfandlcsw.com/">https://barbaragelfandlcsw.com/</StyledAnchor></div>
            <div class="email"><StyledAnchor href="mailto:barbaragelfand@gmail.com">barbaragelfand@gmail.com</StyledAnchor></div>
        </div>
    </BigFooter>
)

export default Footer