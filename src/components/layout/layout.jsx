import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import SiteNav from './site-nav'

const Layout = ({ children }) => (
  <>
    <header>
      <h1>
        <Link to="/">Joseph Morse</Link>
      </h1>
    </header>

    <SiteNav />

    <main>{children}</main>

    <footer>&copy; 2019; Joseph Morse</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
