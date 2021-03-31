import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <p>Home</p>
      {data.allMdx.edges.map(({ node }) => (
        <p key={node.id}>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>:
          {node.frontmatter.date}
        </p>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            slug
          }
        }
      }
    }
  }
`
