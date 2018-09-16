module.exports = {
  siteMetadata: {
    url: 'https://giving.yicf.org',
    title: 'Donate - Empower the urban poor of Indonesia | YICF',
    image: 'https://via.placeholder.com/1200x630',
    description:
      'Donate to charity and join us in our mission to end the water crisis. 100% of your donation brings clean water to people in need.',
    keywords:
      'water wells, charity water, charity, give, water, water for africa, africa, india, south america, clean water, safe water, access to clean water, digging wells, clean water for africa, safe drinking water, drinking water for poor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: false,
      },
    },
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'YICF Giving',
        short_name: 'YICF',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
