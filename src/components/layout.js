import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import media from './mediaqueries'

import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const BodyWrapper = styled.div `
      margin-left: auto;
      margin-right: auto;
      margin-top: 280px;
      margin-bottom: 40px;
      position: static;
      background-color: #ffffff;
      max-width: 1100px;
      padding: 0px 4rem 1.45rem;
      padding-top: 0;
      border: 1px solid #eee;
      border-radius: 5px;
      box-shadow: 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 6px 12px;
${media.big`
      margin-top: 240px;
    `} 
${media.xlarge`
      margin-top: 200px;
    `} 
${media.xl`
      margin-top: 120px;
    `} 
 ${media.xldesktop`
      margin-top: 80px;
    `} 
  ${media.bigdesktop`
      margin-top: 20px;
    `} 
   ${media.desktop`
      margin-top: 20px;
    `} 
    ${media.tablet`
      margin-top: 60px;
    `} 
    ${media.phone`
      margin-top: 25px;
    `} 
`

const Layout = ({ children, }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            headerLinks{
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Menu 
        headerLinks={data.site.siteMetadata.headerLinks}
        />
        <Header siteTitle={data.site.siteMetadata.title}
        siteDesc={data.site.siteMetadata.description}
         />
        <BodyWrapper>
          <main>{children}</main>
          <footer>
          <hr />
            © {new Date().getFullYear()}  
            {` `}
            Barbara Gelfand LCSW
          </footer>
        </BodyWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
