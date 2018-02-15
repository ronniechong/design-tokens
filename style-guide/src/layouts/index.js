import React from 'react';
import Link from 'gatsby-link';

import styles from '../styles/index.module.css';

const NavLink = props => (
  <div className={styles['nav-link']}>
    <Link to={props.to} activeClassName={styles['link-active']}>
      {props.children}
    </Link>
  </div>
);

export default ({ children }) => (
  <div className={styles['two-column']}>
    <div className={styles['nav']}>
      <Link className={styles['link-secondary']} to="/">
        <h1>OTKit Style Guide</h1>
      </Link>
      <NavLink to="/otkit-desktop-typography/">Typography</NavLink>
      <NavLink to="/otkit-colors/">Colors</NavLink>
      <div className={styles['nav-link']}>
        <a href="https://github.com/opentable/design-tokens" target="_blank">
          design-tokens repo
        </a>
      </div>
    </div>
    <div className={styles['main']}>{children()}</div>
  </div>
);
