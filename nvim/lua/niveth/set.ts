vim.opt.relativenumber = true;
vim.opt.number = true;

vim.opt.tabstop = 4;
vim.opt.softtabstop = 4;
vim.opt.shiftwidth = 4;
vim.opt.expandtab = true;

vim.opt.smartindent = true;

vim.opt.wrap = false;

vim.opt.swapfile = false;
vim.opt.backup = false;
vim.opt.undodir = os.getenv("HOME") + "/.vim/undodir";
vim.opt.undofile = true;

vim.opt.hlsearch = false;
vim.opt.incsearch = true;

vim.opt.termguicolors = true;

vim.opt.scrolloff = 8;

vim.opt.shell = "nu";

vim.opt.timeoutlen = 1000;
vim.opt.timeout = true;

vim.opt.signcolumn = "yes";

vim.opt.wildignore = "*/node_modules/*"

vim.opt.laststatus = 3; // Have global status line
