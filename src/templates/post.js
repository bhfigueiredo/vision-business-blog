import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import styles from './post.module.scss'
import './prism-okaidia.css'

export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const date = postNode.fields.date
  const anyCategory = postNode.frontmatter.categories != null
  const mensagemCompra = "Compre agora"
  const linkCompra = postNode.fields.linkCheckout
  const subtitle = postNode.fields.subtitle
  if (!post.id) {
    post.id = slug
  }
  if(!anyCategory){
    return(
      <Layout>
        <main>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <blockquote>
              {subtitle} {' '}
            </blockquote>
            
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

            <hr />

            <div className={styles.postMeta}>
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </div>
          <div className={styles.postMeta}>
              <PostTags tags={post.tags} />
          </div>
        </main>
      </Layout>
    )
  }else{
    return (
      <Layout>
        <main>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <blockquote>
              {subtitle} {' '}
            </blockquote>
  
            <a href={linkCompra} target="_blank" rel={mensagemCompra} className={styles.checkoutButtonTop}>
              {mensagemCompra}
            </a>
            
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
  
            <hr />
  
            <div className={styles.postMeta}>
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </div>
          <a href={linkCompra} target="_blank" rel={mensagemCompra} className={styles.checkoutButton}>
            {mensagemCompra}
          </a>
        </main>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
        subtitle
        valor
        linkCheckout
      }
    }
  }
`
