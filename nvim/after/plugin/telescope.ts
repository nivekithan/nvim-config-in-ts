import { find_files, git_files, help_tags } from "telescope.builtin";
import { LEADER } from "../../lua/niveth/constants";

print("Hello there");

vim.keymap.set("n", `${LEADER}saf`, find_files, { desc: "Search all files" });
vim.keymap.set("n", `${LEADER}sgf`, git_files, { desc: "Search git files" });
vim.keymap.set("n", `${LEADER}sh`, help_tags, { desc: "Search help tags" });
