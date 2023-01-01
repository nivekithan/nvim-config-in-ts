
local fileName = vim.api.nvim_buf_get_name(0);

print(fileName);

local absoluteName = vim.fn.expand( "../:p" );
print(absoluteName);

