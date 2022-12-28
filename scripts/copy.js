const path = require("path");
const copydir = require("copy-dir");

copydir.sync(path.resolve(__dirname, "..", "dist"), "C:/Users/nivek/AppData/Local/nvim");
