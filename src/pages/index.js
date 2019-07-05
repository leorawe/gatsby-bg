import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitle"
import media from '../components/mediaqueries'

import barbaragelfand from "../images/barbara-gelfand.jpg"
//console.log(barbaragelfand)

const SideImage = styled.div `
  float: right;
  width: 190px;
  margin-left: 20px;
  margin-bottom: 20px;
  ${media.phone`
    float: none;
    margin: 0 auto;
    text-align: center;
  `} 
`

const IndexPage = () => (
  <Layout>
    <SEO 
    title="Psychotherapy Practice of Barbara Gelfand, LCSW" 
    description="We all have a desire to be heard, to be understood, and to be soothed. We often yearn for more satisfying and loving relationships. In therapy, Barbara Gelfand will listen carefully to you…"
    />
    <Pagetitle
    pagetitle = "Psychotherapy Practice of Barbara Gelfand, LCSW"
    />
    <SideImage><img src={barbaragelfand} alt="Barbara Gelfand" /></SideImage>
    <p>We all have a desire to be heard, to be understood, and to be soothed. We often yearn for more satisfying and loving relationships. In therapy, I will listen carefully to you as we sort through obstacles that may be preventing you from experiencing greater ease and happiness. I will bear witness to your life stories, acknowledge your successes and struggles, and help you to find renewed resilience, acceptance and change. I'm patient and open-minded, and provide an empathic therapy space. I believe true healing occurs when we take care of our whole self in mind, body and spirit.
    </p>
    <p>I have over 25 years of experience as a clinical social worker and my experience has taught me that the story always unfolds and things can get better. I provide both short-term and more intensive psychotherapy tailored to the needs of each client.</p>

  </Layout>
)

export default IndexPage
