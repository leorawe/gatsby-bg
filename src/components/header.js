import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import CoverImage from "./coverimage"
import media from './mediaqueries'

const StyledHeader = styled.div `
    margin-bottom: 1.5rem;
    ${media.desktop`
      margin-bottom: 0;
    `} 
`

const CoverWrapper = styled.div `
     position: relative;
     height: 200px;
  ${media.bigdesktop`
      height: 240px;
  `}
  ${media.desktop`
      height: 210px;
  `}
  ${media.tablet`
      height: 250px;
  `}
    ${media.phone`
      height: auto;
  `}
     `

const BackRect = styled.div `
     position: absolute;
     background-color: #669933;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     z-index: 8;
     content: "";
     width: 500px;
     height: 100px;
     opacity: .7;
     border-radius: 10px;
     ${media.desktop`
      top: 30%;
      background-color: #669933;
      height: 125px;
  `}
  ${media.tablet`
      height: 120px;
      top: 85%;
      width: 95%;
  `}
    ${media.phone`
      display: none;
  `}
`

const TextSection = styled.div `
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-weight: 800px;
      word-wrap: no-wrap;
      z-index: 99;
      text-shadow: 1px 1px 4px rgba(34,34,34,0.6);
      ${media.desktop`
      top: 30%;
  `}
  ${media.tablet`
      top: 85%;
  `}
    ${media.phone`
        position: static;
        width: 100%;
        -webkit-transform: none;
        transform: none;
        background-color: #669933;
    `}
`
const TitleLink = styled(props => <Link {...props} />) `
      color: white;
      text-decoration: none;
      font-size: 2.5rem;
      ${media.tablet`
      font-size: 1.5rem;
  `}
`
const Header = ({ siteTitle, siteDesc }) => (
  <StyledHeader>
  <CoverWrapper>
   <CoverImage />
     <BackRect>
     </BackRect>
   <TextSection
    > <TitleLink
          to="/"

        >{siteTitle} 
        </TitleLink>
        <div style={{
            fontSize: `1.25rem`,
          }}>{siteDesc}
          </div>
        </TextSection>
      </CoverWrapper>
  
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header