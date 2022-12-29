import { startup } from "packer";

startup((use) => {
  use("wbthomason/packer.nvim");

  use({
    1: "nvim-telescope/telescope.nvim",
    tag: "0.1.0",
    requires: ["nvim-lua/plenary.nvim", "BurntSushi/ripgrep"],
  });

  use("Mofiqul/dracula.nvim");

  use({ 1: "nvim-treesitter/nvim-treesitter" });

  use({
    1: "VonHeikemen/lsp-zero.nvim",
    requires: [
      "neovim/nvim-lspconfig",
      "williamboman/mason.nvim",
      "williamboman/mason-lspconfig.nvim",
      "hrsh7th/nvim-cmp",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
      "saadparwaiz1/cmp_luasnip",
      "hrsh7th/cmp-nvim-lsp",
      "hrsh7th/cmp-nvim-lua",
      "L3MON4D3/LuaSnip",
      "rafamadriz/friendly-snippets",
    ],
  });

  use({
    1: "nvim-lualine/lualine.nvim",
    requires: ["kyazdani42/nvim-web-devicons"],
  });
});

