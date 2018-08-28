module.exports = {
  siteMetadata: {
    title: 'YICF Giving Page',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // anonymize: true,
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
};
