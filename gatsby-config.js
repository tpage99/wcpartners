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
      resolve: "gatsby-plugin-source-eventbrite",
      options: {
        // This option will pass query param directly to the event search API
        // https://www.eventbrite.com/platform/api#/reference/event-search/list/search-events
        query: {
          "organizer.id": "313014094589",
          expand: ["venue"],
        },
        // You will need to generate an Eventbrite Access token
        // https://www.eventbrite.com/myaccount/apps/
        token: process.env.EVENTBRITE_API_KEY,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
