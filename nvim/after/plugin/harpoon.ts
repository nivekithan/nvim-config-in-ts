import { nav_file, toggle_quick_menu } from "harpoon.ui";
import { add_file } from "harpoon.mark";
import { LEADER } from "../../lua/niveth/constants";

vim.keymap.set("n", `${LEADER}mf`, add_file, { desc: "Marks current file" });
vim.keymap.set("n", `${LEADER}sm`, toggle_quick_menu, { desc: "Search marks" });
vim.keymap.set("n", `${LEADER}1`, () => nav_file(1), {
  desc: "goes to harpoon marked file 1",
});
vim.keymap.set("n", `${LEADER}2`, () => nav_file(2), {
  desc: "goes to harpoon marked file 2",
});
vim.keymap.set("n", `${LEADER}3`, () => nav_file(3), {
  desc: "goes to harpoon marked file 3",
});
