import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import styles from './category.module.scss'

const CategoryTemplate = ({ data, pageContext }) => (
  <Layout>
    <main>
      <Helmet title={` "${pageContext.category}" - ${config.siteTitle}`} />
      <h1 className={styles.categoryHeader}>
        Todos os
        {' '}
        {pageContext.category}
      </h1>
      <span className={styles.categorySubHeader}>para criadores de conteúdo e empreendedores</span>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
            valor
            subtitle
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`
