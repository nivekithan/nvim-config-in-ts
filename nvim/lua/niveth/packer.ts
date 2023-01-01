import { startup } from "packer";

startup((use) => {
  use("wbthomason/packer.nvim");

  use({
    1: "nvim-telescope/telescope.nvim",
    tag: "0.1.0",
    requires: ["nvim-lua/plenary.nvim", "BurntSushi/ripgrep"],
  });

  use("Mofiqul/dracula.nvim");
  use("folke/tokyonight.nvim");

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
    ],
  });

  use({
    1: "jose-elias-alvarez/null-ls.nvim",
    requires: ["nvim-lua/plenary.nvim"],
  });

  use({
    1: "nvim-lualine/lualine.nvim",
    requires: ["kyazdani42/nvim-web-devicons"],
  });

  use("nvim-treesitter/playground");

  use("ThePrimeagen/harpoon");
});
