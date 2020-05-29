import React from 'react'
import { Link } from 'gatsby'
import styles from './PostsListing.module.scss'

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        subtitle: postEdge.node.fields.subtitle,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        valor: postEdge.node.fields.valor,
        linkCheckout: postEdge.node.fields.linkCheckout
      })
    })
    return postList
  }

  const postList = getPostList()
  return (
    <div className={styles.articleList}>
      {/* Your post list here. */
      postList.map(post => (
        <Link className={styles.articleContainer} to={post.path} key={post.title}>
          <article className={styles.articleBox}>
            <div className={styles.right}>
              <h3 className={styles.title}>{post.title}</h3>
              <div className={styles.meta}>
                <span><b>{post.subtitle}</b></span>
              </div>
              <img style={{ width: 400, height: 300 }} src={post.cover}></img>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default PostListing
