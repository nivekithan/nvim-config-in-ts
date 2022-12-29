import * as lsp from "lsp-zero";

lsp.preset("recommended");

lsp.ensure_installed(["tsserver", "eslint"]);

lsp.setup();

vim.diagnostic.config({ virtual_text: true, update_in_insert: true });
