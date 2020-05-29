import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import BlogListing from '../components/BlogListing'
import PostListing from '../components/PostListing'

const Blog = ({ data }) => (
  <Layout>
    <main>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <BlogListing blogEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: {categories: {eq: null}}}
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
            subtitle
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
