import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import CoverImage from "./coverimage"

const StyledHeader = styled.div `
    margin-bottom: 1.5rem;
`

const CoverWrapper = styled.div `
     position: relative;
     height: 200px;
     `

const BackRect = styled.div `
     position: absolute;
     background-color: #669933;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     z-index: 8;
     content: "";
     width: 410px;
     height: 80px;
     opacity: .7;
     border-radius: 10px;
`

const TextSection = styled.div `
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-weight: 800px;
      word-wrap: noWrap;
      z-index: 99;
      text-shadow: 1px 1px 4px rgba(34,34,34,0.6);
`

const Header = ({ siteTitle, siteDesc }) => (
  <StyledHeader>
  <CoverWrapper>
   <CoverImage />
     <BackRect>
     </BackRect>
   <TextSection
    > <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `2rem`,
          }}
        >{siteTitle} 
        </Link>
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