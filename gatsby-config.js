const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `WC PARTNERS`,
    description: `Webster County SB40 Board - Growing Towards Empowered Futures.`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
          },
          {
            family: `Lato`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/resources`,
        name: "resources",
      },
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-source-eventbrite",
    //   options: {
    //     // This option will pass query param directly to the event search API
    //     // https://www.eventbrite.com/platform/api#/reference/event-search/list/search-events
    //     query: {
    //       "organizer.id": "313014094589",
    //     },
    //     // You will need to generate an Eventbrite Access token
    //     // https://www.eventbrite.com/myaccount/apps/
    //     token: process.env.EVENTBRITE_API_KEY,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WC Partners`,
        short_name: `wc-partners`,
        start_url: `/`,
        background_color: `#2d5b2d`,
        theme_color: `#48b04c`,
        display: `minimal-ui`,
        icon: `src/images/wclogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143787607-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "www.wc-partners.net",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
