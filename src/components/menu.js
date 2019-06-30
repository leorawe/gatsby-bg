import { Link } from "gatsby"
import React, { Component } from "react"
import styled from 'styled-components'

import media from './mediaqueries'

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #333;
`
const Hamburger = styled.div`
  span {
    background: #333;
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  }
  color: #fff;
  display: none;
  cursor: pointer;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin: 5px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    display: initial;
  `} 
  ${media.phone`
    display: initial;
  `} 
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  z-index: 1000;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #333;
  &.panel-open {display: flex;}
  &.panel-closed {display: none;}
  ${media.tablet`
    flex-direction: column;
    height: auto;
  `} 
  ${media.phone`
    flex-direction: column;
    height: auto;
  `} 
`

const HeaderDesk = styled.nav`
${media.tablet`
    display: none;
  `} 
${media.phone`
    display: none;
  `} 
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  font-size: .9rem;
  z-index: 10;
  &:hover {
    color: #99cc66;
  }
`

const HeaderSpot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  font-size: .9rem;
  z-index: 10;
  `

const Menu = class extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      isOpen: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    //alert('toggle');
    //console.log('tog');
    // toggle the active boolean in the state
    this.setState(
      { isOpen: !this.state.isOpen }
      // after state has been updated,
    //   () => {
    //     // set the class in state for the navbar accordingly
    //     this.state.active
    //       ? this.setState({
    //           navBarActiveClass: 'is-active',
    //         })
    //       : this.setState({
    //           navBarActiveClass: '',
    //   })
    // }
    )
  }



render() {
    return (
 <HeaderWrapper>
  {/* <Navbar /> */}
  <HeaderSpot>
    <Hamburger 
    onClick={() => this.toggleHamburger()}>Menu
   </Hamburger>
   </HeaderSpot>
   <HeaderDesk>
   <HeaderNav>
        {this.props.headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.link} key={`header-link-${i}`}>
              {headerLink.name}
            </HeaderLink>
            ))}      
  </HeaderNav>
  </HeaderDesk>

  <HeaderNav 
  className={this.state.isOpen===true ? "panel-open" : "panel-closed"}>
        {this.props.headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.link} key={`header-link-${i}`}>
              {headerLink.name}
            </HeaderLink>
            ))}      
  </HeaderNav>

</HeaderWrapper>
)
   }
}

export default Menu

