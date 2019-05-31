import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <header>
      <h1>About Me</h1>
    </header>

    <p>I currently do stuff</p>
    <p>
      <Link to="/">Home</Link>
    </p>
  </Layout>
)

export default AboutPage
