const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `WC Partners`,
    description: `WC Partners is the Webster County SB40 Board. Our mission is - Growing towards empowered futures. We serve individuals with developmental disabilities and their families in the Webster County area through Targeted Case Management services.`,
    siteUrl: `https://www.wc-partners.net`,
    imgLogo: `https://res.cloudinary.com/tpage99/image/upload/v1560421417/WCPartners/wclogo.png`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/events`,
        name: "events",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/careers`,
        name: "careers",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        createLinkInHead: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
