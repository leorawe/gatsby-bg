import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import Pagetitle from "../components/pagetitle"
import media from '../components/mediaqueries'

const DoubleUL = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-position: inside;
  ${media.tablet`
  columns: 1;
  -webkit-columns: 1;
  -moz-columns: 1;
  `} 
`

const Education = () => (
  <Layout>
    <Seo 
    title="Areas of Specialty of Barbara Gelfand, LCSW" 
    description="Barbara Gelfand's specialties... individual, family, couples therapy for anxiety, depression, grief, eating disorders, stress, meditation, spirituality, Jewish life."
    />
    <Pagetitle
    pagetitle = "Areas of Specialty"

    />
    <p>My practice focuses on clinical work with older adolescents and adults utilizing individual, group, family and couples modalities. My areas of expertise includes:</p>
    <DoubleUL>
      <li>	Anxiety</li>
      <li>	Depression</li>
      
      <li>	Relationship Issues
      </li>
      <li>	Marital Issues
      </li>
      <li>	Family Issues
      </li>
      <li>	Self-Esteem
      </li>
      <li>	Grief and Loss
      </li>
      <li>	Mindfulness
      </li>
      <li>	Mind/Body Somatic Techniques
      </li>
      <li>	Stress Reduction
      </li>
      <li>	Meditation
      </li>
      <li>	Spirituality
      </li>
      <li>Jewish Family Life</li>
      <li>	Eating Disorders
      </li>
      <li>	Chronic Disease Self-Management
      </li>
      <li>	Diabetes Counseling
      </li>
      <li>	Weight Loss
      </li>
      <li>	Physical Fitness
      </li>
      <li>	Pain Management
      </li>
      <li>	Sleep Disorders and Insomnia
      </li>
      <li>	Sexuality Concerns
      </li>
      <li>	Women’s Issues
      </li>
      <li>	Parenting Concerns
      </li>
      <li>	Adoption Concerns
      </li>
      <li>	Life Coaching
      </li>
      <li>	Life Transitions</li>
      
    </DoubleUL>
  </Layout>
)

export default Education
