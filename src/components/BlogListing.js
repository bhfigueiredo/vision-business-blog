import React from 'react'
import { Link } from 'gatsby'
import styles from './PostsListing.module.scss'

const BlogListing = ({ blogEdges }) => {
  const getBlogList = () => {
    const blogList = []
    blogEdges.forEach(blogEdge => {
      blogList.push({
        path: blogEdge.node.fields.slug,
        tags: blogEdge.node.frontmatter.tags,
        cover: blogEdge.node.frontmatter.cover,
        title: blogEdge.node.frontmatter.title,
        subtitle: blogEdge.node.fields.subtitle,
        date: blogEdge.node.fields.date,
        excerpt: blogEdge.node.excerpt,
        timeToRead: blogEdge.node.timeToRead
      })
    })
    return blogList
  }

  const blogList = getBlogList()

  return (
    <div className={styles.articleList}>
      {/* Your blog list here. */
      blogList.map(blog => (
        <Link className={styles.articleContainer} to={blog.path} key={blog.title}>
          <article className={styles.articleBox}>
            <div className={styles.right}>
              <h3 className={styles.title}>{blog.title}</h3>
              <div className={styles.meta}>
                <span><b>{blog.subtitle}</b></span>
              </div>
              <img style={{ width: 400, height: 300 }} src={blog.cover}></img>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default BlogListing
