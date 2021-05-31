/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CREATE SE4AI",
  tagline:
    "A Training Program on the Development, Deployment and Servicing of Artificial Intelligence-based Software Systems",
  url: "https://create-se4ai.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "create-se4ai", // Usually your GitHub org/user name.
  projectName: "create-se4ai.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "CREATE SE4AI",
      hideOnScroll: true,
      logo: {
        alt: "CREATE SE4AI",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        { to: "/about", label: "About Us", position: "left" },
        { to: "/team", label: "Team", position: "left" },
        { href: "/apply", label: "Apply", position: "left" },
        // {
        //   href: 'https://github.com/create-se4ai',
        //   position: 'right',
        // },
        { to: "/contact", label: "Contact", position: "right" },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Info",
          items: [
            {
              label: "About Us",
              to: "/about",
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
          items: [],
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
              href: "https://twitter.com/create-se4ai",
            },
            {
              label: "GitHub",
              href: "https://github.com/create-se4ai",
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
              href: "https://twitter.com/create-se4ai",
            },
            {
              label: "GitHub",
              href: "https://github.com/create-se4ai",
            },
          ],
        },
      ],
      logo: {
        alt: "NSERC",
        src: "/img/NSERC_WHITE.png",
      },
      copyright: `<p>We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC).</p>Copyright © ${new Date().getFullYear()} DAS Lab.`,
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
      },
    ],
  ],
};
