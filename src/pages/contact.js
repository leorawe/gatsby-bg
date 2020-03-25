import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitle"
import styled from 'styled-components'

const StyledH2 = styled.h2 `
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-top: 2rem;
`

const StyledAnchor = styled.a `
      color: #47288f;
      &:hover {
        color: #7556be;
      }
`

const Contact = () => (
  <Layout>
    <SEO 
    title="Contact Barbara Gelfand" 
    description="Contact barbaragelfand@gmail.com, 732-220-8844. Telehealth Zoom sessions. Office in Highland Park near Rutgers Univ. New Brunswick, Edison, Metuchen, Piscataway, East Brunswick."
    />
    <Pagetitle
    pagetitle = "Contact Barbara Gelfand" />
    <p><strong>732-220-8844</strong><br />
    <StyledAnchor href="mailto:barbaragelfand@gmail.com"><strong>barbaragelfand@gmail.com</strong></StyledAnchor></p>
     <p>307 Raritan Avenue<br />
      Highland Park, NJ 08904</p>
      <p>NJ License # SC05954</p>
      <StyledH2>Fee</StyledH2>
My fee is $180/hr. for a 45-minute session.  I am an out-of network provider and will supply you with a monthly statement to submit to your insurance company.  Payment is appreciated at the time of service.  Cash, check or credit card is accepted.  For a limited number of clients, a sliding scale fee is available, to be discussed at our initial session.

      <StyledH2>Office is Located Near</StyledH2>
       <div>Highland Park, East Brunswick, New Brunswick, Piscataway, Edison, Metuchen, Kendall Park, South Brunswick, Hillsborough and Montgomery</div>

      <StyledH2>Telehealth Sessions</StyledH2>
      <p>Telehealth video sessions available via Zoom, an easy-to-use secure HIPAA compliant videoconference service that can be accessed online with your home computer, or with the Zoom app on your mobile phone. Telemedicine visits are now reimbursable by most insurance companies. </p>
  </Layout>
)

export default Contact