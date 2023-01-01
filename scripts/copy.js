const path = require("path");
const copydir = require("copy-dir");

const nvimConfig = "C:/Users/nivek/AppData/Local/nvim";
copydir.sync(path.resolve(__dirname, "..", "dist"), nvimConfig);
copydir.sync(`${nvimConfig}/lualib_bundle.lua`, `${nvimConfig}/lua/lualib_bundle.lua` );
