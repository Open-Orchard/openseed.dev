module.exports = {
  Sidebar: {
    "Get Started": ["introduction", "module_overview", "install"],
    "Samples & Tutorials": ["samples/javascript"],
    API: [
      "api/general",
      {
        type: "category",
        label: "Modules",
        items: [
          "api/account",
          "api/chat",
          "api/game",
          "api/ipfs",
          "api/music",
          "api/seedgenerator",
          "api/steem",
          "api/token",
          "api/utils"
        ]
      }
    ]
  }
};
