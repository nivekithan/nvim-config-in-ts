import { find_files,  help_tags, keymaps, live_grep } from "telescope/builtin";
import { LEADER } from "../../lua/niveth/constants";

vim.keymap.set("n", `${LEADER}sf`, find_files, { desc: "Search all files" });
vim.keymap.set("n", `${LEADER}sh`, help_tags, { desc: "Search help tags" });
vim.keymap.set("n", `${LEADER}sk`, keymaps, {desc : "Search keymaps"})
vim.keymap.set("n", `${LEADER}ss`, live_grep, {desc : "Seachers a string across all files in cwd"})
