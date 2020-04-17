module.exports = {
  title: "OpenSeed",
  tagline: "Cross-Platform Off-Chain Solutions for Apps",
  url: "https://www.openseed.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "OpenSeedINC", // Usually your GitHub org/user name.
  projectName: "OpenSeed", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "support_us", // Any value that will identify this message
      content:
        'Disclaimer: This website is still in early stage of development, stay tuned for more updates!',
      backgroundColor: "#1b1c28", 
      textColor: "#ffffff",
    },
    navbar: {
      title: "OpenSeed",
      logo: {
        alt: "OpenSeed Logo",
        src: "img/openseed.png",
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "showcase",
          activeBasePath: "/showcase",
          label: "Showcase",
          position: "left",
        },
        {
          label: "Community",
          position: "left",
          items: [
            {
              label: "HIVE Community",
              position: "left",
              href: "https://peakd.com/c/hive-152786",
            },
            {
              label: "Discord Chat",
              position: "left",
              href: "https://discord.gg/XY4BWNY",
            },
          ],
        },
        {
          href: "https://github.com/OpenSeedINC/OpenSeed",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Custom Links",
          items: [
            {
              label: "Custom Link 1",
              href: "https://peakd.com/c/hive-152786",
            },
            {
              label: "Custom Link 2",
              href: "https://discord.gg/NGnK9F",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "HIVE Community",
              href: "https://peakd.com/c/hive-152786",
            },
            {
              label: "Discord Chat",
              href: "https://discord.gg/XY4BWNY",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "HIVE Blog",
              href: "https://peakd.com/@openseed",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenSeed Labs`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Open-Orchard/openseed.dev/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
