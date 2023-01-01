import * as lsp from "lsp-zero";

lsp.preset("recommended");

lsp.ensure_installed(["tsserver", "eslint"]);

lsp.on_attach((_, bufnr) => {
  const opts = { buffer: bufnr };

  vim.keymap.set("i", "<C-h>", vim.lsp.buf.signature_help, opts);
});

lsp.setup();

vim.diagnostic.config({ virtual_text: true, update_in_insert: true });
