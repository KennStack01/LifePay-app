/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  /* Your site config here */
  siteMetadata: {
    title: `LifePay App`,
    siteUrl: `https://www/lifepay.app`,
    author: "@LifeWordNation",
    description: `LifeWord Nation`,
    keywords: `Payments Gates, WeChat Pay, AliPay, PayPal, Bank Transfer`,
    image: "/Images/Picture-Cover.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@PenielKatombe",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
