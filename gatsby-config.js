const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'hello-gatsby',
    description:
      'My starter kit for Gatsby projects based on gatsby-starter-typescript-plus',
    keywords:
      'gatsby, typescript, material-ui, redux, starter, jest, storybook, cypress',
    siteUrl: 'https://www.hellotham.com',
    author: {
      name: 'Chris Tham',
      url: 'https://www.hellotham.com',
      email: 'chris.tham@hellotham.com',
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
