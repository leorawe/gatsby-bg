import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitle"

const Contact = () => (
  <Layout>
    <SEO 
    title="Contact Barbara Gelfand" 
    description="Contact Barbara Gelfand by email or by phone (732-220-8844) - located in Highland Park, New Jersey"
    />
    <Pagetitle
    pagetitle = "Contact Barbara Gelfand" />
    <p><strong>732-220-8844</strong><br />
    <a href="mailto:barbaragelfand@gmail.com"><strong>barbaragelfand@gmail.com</strong></a></p>
     <p> 1164 Raritan Avenue<br />
      Highland Park, NJ 08904</p>
      <p>NJ License # SC05954</p>
      <p>Insurance Accepted</p>
      <p><strong>Office is Located Near</strong><br />
Highland Park, East Brunswick, New Brunswick, Piscataway, Edison, Metuchen, Kendall Park, South Brunswick, Hillsborough and Montgomery</p>

  </Layout>
)

export default Contact