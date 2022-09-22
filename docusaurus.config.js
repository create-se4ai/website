/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require("path");

module.exports = {
  title: "CREATE SE4AI",
  tagline:
    "A Training Program on the Development, Deployment and Servicing of Artificial Intelligence-based Software Systems",
  url: "https://se4ai.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "create-se4ai", // Usually your GitHub org/user name.
  projectName: "create-se4ai.github.io", // Usually your repo name.
  plugins: [
    require.resolve("./src/plugins/custom-webpack-config.js"),
    [
      "docusaurus-plugin-face-crop",
      {
        paths: [path.resolve(__dirname, "./team/photos")],
        height: 400,
        width: 400,
        minScale: 1,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "CREATE SE4AI",
      hideOnScroll: true,
      logo: {
        alt: "CREATE SE4AI",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/blog', label: 'Events', position: 'left'},
        { to: "/intro", label: "Program", position: "left" },
        { to: "/team", label: "Team", position: "left" },
        { to: "/governance", label: "Governance", position: "left" },
        { to: "/partners", label: "Partners", position: "left" },
        { href: "/apply", label: "Apply", position: "left" },
        // {
        //   href: 'https://github.com/create-se4ai',
        //   position: 'right',
        // },
        { to: "/contact", label: "Contact", position: "right" },
      ],
    },
    colorMode: {
      defaultMode: "light",
      // disableSwitch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Partner Universities",
          items: [
            {
              label: "Concordia University",
              href: "https://www.concordia.ca/",
            },
            {
              label: "Polytechnique Montréal",
              href: "https://www.polymtl.ca/en/",
            },
            {
              label: "Queen's University",
              href: "https://www.queensu.ca",
            },
            {
              label: "University of Alberta",
              href: "https://www.ualberta.ca",
            },
          ],
        },
        {
          title: "Program",
          items: [
            {
              label: "Introduction",
              to: "/intro",
            },
            {
              label: "Objectives",
              to: "/training-program/objectives",
            },
            {
              label: "Components",
              to: "/training-program/components",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Team",
              to: "/team",
            },
            {
              label: "Partners",
              to: "/partners",
            },
            {
              label: "Apply",
              to: "/apply",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "Twitter",
              href: "https://twitter.com/CREATE_SE4AI",
            },
            {
              label: "GitHub",
              href: "https://github.com/create-se4ai",
            },
            { label: "Contact", to: "/contact" },
          ],
        },
      ],
      logo: {
        alt: "NSERC",
        src: "/img/NSERC_WHITE.png",
      },
      copyright: `<p>We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC).</p>Copyright © ${new Date().getFullYear()} CREATE SE4AI.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-VKNMLKQGRY",
          anonymizeIP: false,
        },
      },
    ],
  ],
};
