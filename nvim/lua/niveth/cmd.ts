export const cmd = {
  /** @noSelf */
  setColorScheme(colorScheme: string) {
    vim.cmd(`colorscheme ${colorScheme}`);
  },
};
