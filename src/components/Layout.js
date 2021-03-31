import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import Hello from "./Hello"
import Bye from "./Bye"

const shortcodes = { Hello, Bye }

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <MDXProvider components={shortcodes}>
      <div
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "lightgrey",
          minHeight: "100vh",
          padding: "4rem",
        }}
      >
        <h1 style={{ margin: 0 }}>{data.site.siteMetadata.title}</h1>
        {children}
      </div>
    </MDXProvider>
  )
}

export default Layout
