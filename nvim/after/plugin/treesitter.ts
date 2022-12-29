import { setup } from "nvim-treesitter.configs"

setup({
    ensure_installed: ["typescript", "help", "javascript",],
    sync_install: false,
    highlight: { enable: true, additional_vim_regex_higlighting: false },
})
