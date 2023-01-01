import { setup } from "nvim-treesitter.configs"

setup({
    ensure_installed: ["typescript", "help", "javascript", "tsx"],
    sync_install: false,
    highlight: { enable: true, additional_vim_regex_higlighting: false },
    playground : {enable : true, presist_queries : false },
    // Set it to true, only when tree-sitter-cli (avaliable from npm) is installed 
    auto_install : true
})
