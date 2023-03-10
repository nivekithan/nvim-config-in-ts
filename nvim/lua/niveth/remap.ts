import { cmd } from "./cmd";
import { LEADER } from "./constants";

vim.g.mapleader = "<space>";

const NOP = "<nop>";

vim.keymap.set("n", "s", NOP);

vim.keymap.set("n", `${LEADER}pv`, cmd.openFileExplorer, {
  desc: "Open File Explorer",
});

vim.keymap.set(["n", "v"], `${LEADER}y`, '"+y', {
  desc: "Yank using clipboard",
});
vim.keymap.set("n", `${LEADER}Y`, '"+Y', {
  desc: "Yank whole line using clipboard",
});

vim.keymap.set(["n", "v"], `${LEADER}d`, '"_d', {
  desc: "Delete using clipboard",
});

vim.keymap.set("n", `${LEADER}}P`, '"+p', { desc: "Paste using clipboard" });

vim.keymap.set("i", "<C-c>", "<Esc>", { desc: "Exit insert mode" });

vim.keymap.set("n", "Q", NOP);

vim.keymap.set(
  "n",
  `${LEADER}f`,
  () => {
    vim.lsp.buf.format({
      filter: (client) => {
        if (client !== null) {
          return client.name === "null-ls";
        }

        return false;
      },
      timeout_ms: 3000
    });
  },
  { desc: "Format code" }
);

vim.keymap.set("t", `<C-q>`, "<C-\\><C-n>", {
  desc: "Exit terminal mode",
});

vim.keymap.set("i", "[", "[]<left>", { desc: "Autopair for [" });
vim.keymap.set("i", "{", "{}<left>", { desc: "Autopair for {" });
vim.keymap.set("i", "'", "''<left>", { desc: "Autopair for '" });
vim.keymap.set("i", '"', '""<left>', { desc: 'Autopair for "' });
vim.keymap.set("i", "`", "``<left>", { desc: "Autopair for `" });
vim.keymap.set("i", "(", "()<left>", { desc: "Autopair for (" });
