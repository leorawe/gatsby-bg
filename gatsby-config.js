module.exports = {
  siteMetadata: {
    title: `Barbara Gelfand, LCSW`,
    description: `Licensed Clinical Social Worker`,
    author: `@gatsbyjs`,
  headerLinks: [
    {
      name: 'Health and Wellness',
      link: '/health',
    },
    {
      name: 'Education and Work History',
      link: '/education',
    },
    {
      name: 'Areas of Specialty',
      link: '/specialty',
    },
    {
      name: 'Inspirations',
      link: '/inspirations',
    },
    {
      name: 'Contact',
      link: '/contact',
    }
  ],
},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
