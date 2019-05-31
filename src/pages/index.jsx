import React from 'react'

import Layout from '../components/layout'
import { AboutMe, Contact, Projects } from '../components/home-sections'

const IndexPage = () => (
  <Layout>
    <p>{`Fullstack JavaScript developer living in Charlestown, NH`}</p>

    <AboutMe />

    <Projects />

    <Contact />
  </Layout>
)

export default IndexPage
