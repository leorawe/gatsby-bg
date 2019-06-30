import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const BodyWrapper = styled.div `
      margin: 0 auto;
      backgroundColor: #ffffff;
      maxWidth: 800;
      padding: 0px 1.0875rem 1.45rem;
      paddingTop: 0;
      border: 1px solid #eee;
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
            © {new Date().getFullYear()}, copyright 
            {` `}
            Barbara Gelfand
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
