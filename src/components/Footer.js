import React from 'react'
import styles from './Footer.module.scss'
import config from '../../data/SiteConfig'

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
)

export default Footer
