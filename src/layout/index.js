import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className={styles.headerSite}>
      <div className={styles.backgroundHeader}>
        <h1>Aprende Marketing</h1>
        <h2>Transforma a tua paixão num negócio e ganha dinheiro a fazer o que mais gostas</h2>
      </div>
    </div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
    <Footer />
  </>
)

export default MainLayout
