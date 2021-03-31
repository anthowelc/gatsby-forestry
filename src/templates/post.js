import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
