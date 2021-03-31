import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const About = ({ data }) => {
  return (
    <Layout>
      <p>About</p>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
