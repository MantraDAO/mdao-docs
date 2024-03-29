module.exports = {
  About: [
    {
      type: "category",
      label: "About MANTRA DAO",
      collapsed: false,
      items: [
        "about/intro",
        "about/om-token",
        "about/governance",
        "about/exchanges",
        "about/partners",
        "about/downloads",
        "about/documents",
        "about/faq",
      ],
    },
  ],
  Knowledge: [
    {
      type: "category",
      label: "Knowledge Base",
      collapsed: false,
      items: [
        "knowledge/intro",
        {
          DeFi: [
            "knowledge/defi/intro",
            "knowledge/defi/liquidity-mining",
            "knowledge/defi/terms",
          ],
        },
        {
          Lending: ["knowledge/lending/history"],
        },
      ],
    },
  ],
  Guides: [
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "guides/intro",
        "guides/ZENTEREST",
        "guides/mantra-pool",
        "guides/delegator",
        "guides/migrate",
      ],
    },
    {
      type: "category",
      label: "Staking",
      collapsed: false,
      items: [
        "guides/staking/om",
        "guides/staking/polkadot",
        "guides/staking/rewards",
        "guides/staking/more",
        "guides/staking/claim",
        "guides/staking/unstake",
        "guides/staking/buy",
        "guides/staking/kusama",
      ],
    },
  ],
};
