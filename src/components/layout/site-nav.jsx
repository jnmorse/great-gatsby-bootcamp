import React from 'react'
import { Link } from 'gatsby'

const SiteNav = () => (
  <nav>
    <header
      style={{ display: 'block', height: 0, width: 0, overflow: 'hidden' }}
    >
      <h1>Site Nav</h1>
    </header>

    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default SiteNav
