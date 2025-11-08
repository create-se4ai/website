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
        { to: "/intro", label: "Program", position: "left" },
        { to: "/team", label: "Team", position: "left" },
        {to: '/events', label: 'Events', position: 'left'},
        { to: "/highlights", label: "Highlights", position: "left" },
        { to: "/partners", label: "Partners", position: "left" },
        { to: "/geminai", label: "GEMinAi", position: "left" },

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
            },{
              label: "GEMinAI",
              to: "/geminai",
            },
            {
              label: "Partners",
              to: "/partners",
            },
            {
              label: "Apply",
              to: "/apply",
            }, 
               {
              label: "Events",
              to: "/events",
            
            },
          ],
        },{
          title: "Events",
          items: [
            { label: "Trainee_Talks_Mar25", to: "/Trainee_Talks_Mar25,2024" },
            { label: "Trainee_Talks_Webinar_February27", to: "/Trainee_Talks_Webinar_February27,2024" },
            { label: "Future_of_AI_Networking ", to: "/Future_of_AI_Networking" },
            { label: " GEMinAI_Mentoring_Program_Launch_October19_2023 ", to: "/GEMinAI_Mentoring_Program_Launch_October19_2023" },
            { label: " CAN-CWIC_Conference_in_Toronto_October20-21_2023", to: "/CAN-CWIC_Conference_in_Toronto_October20-21_2023" },

            { label: " FM-SE_School_in_Mexico_City_November_16-17_2023 ", to: "/FM-SE_School_in_Mexico_City_November_16-17_2023" },
           
            
            { label: "Trainee_Talks_Webinar_September25_2023", to: "/Trainee_Talks_Webinar_September25_2023" },
            { label: "Industry_Talks_Webinar_April25_2023", to: "/Industry_Talks_Webinar_April25_2023" },
            { label: "Trainee_Talks_Webinar_April3rd_2023", to: "/Trainee_Talks_Webinar_April3rd_2023" },
            { label: "Women_in_Engineering_March18", to: "/Women_in_Engineering_March18" },
            { label: "Trainee_Talks_Webinar_February27_2023", to: "/Trainee_Talks_Webinar_February27_2023" },
            { label: "Industry_Talks_Webinar_February10", to: "/Industry_Talks_Webinar_February10_2023" },
            { label: "Trainee_Talks_Webinar_December13_2022", to: "/Trainee_Talks_Webinar_December13_2022" },
            { label: "Industry_Talks_Webinar_November18_2022", to: "/Industry_Talks_Webinar_November18_2022" },
            { label: "Trainee_Talks_Webinar_November4_2022 ", to: "/Trainee_Talks_Webinar_November4_2022" },
            { label: "CREATE_SE4AI_Retreat_June3_2022", to: "/CREATE_SE4AI_Retreat_June3_2022" },
            { label: "Guest_Speaker_Webinar_April12_2022", to: "/Guest_Speaker_Webinar_April12_2022" },
            { label: "Guest_Speaker_Webinar_February3_2022", to: "/Guest_Speaker_Webinar_February3_2022" }
    
          
          
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
            {
              label: "Youtube",
              href: "https://www.youtube.com/@createse4ai",
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
  }

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
        //   showReadingTime: false,
        // //   // Please change this to your repo.
        // //   // editUrl:
        // //   //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
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
