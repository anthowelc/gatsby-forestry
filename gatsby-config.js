module.exports = {
  siteMetadata: {
    title: `Tuto Gatsby Forestry`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
      },
      gatsbyRemarkPlugins: [],
    },
  ],
}
