/** @noSelfInFile @noSelfInFile */
declare namespace vim {
  interface VimOptions {
    /**
     * Configures the cursor style for each mode. Works in the GUI and many
     * terminals.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'guicursor' doc for guicursor}
     *
     * {@label guicursor}
     */
    guicursor: string;

    /**
     *
     * Print the line number in front of each line.
     * Use the {@link numberwidth} option to adjust the room for the line number.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'number' doc for number}
     * @default `false`
     *
     * {@label number}
     */
    number: boolean;

    /**
     * Show the line number relative to the line with the cursor
     * in front of each line
     *
     * The {@link numberwidth} option can be used to set the room used for the
     * line number
     *
     * @see {@link https://neovim.io/doc/user/options.html#'relativenumber' doc for relativenumber}
     * @default `false`
     *
     * {@label relativenumber}
     */
    relativenumber: boolean;

    /**
     * Minimal number of columns to use for the line number.  Only relevant when
     * the {@link number} or {@link relativenumber} option is set or printing line with a
     * line number
     *
     * @see {@link https://neovim.io/doc/user/options.html#'numberwidth'  doc for numberwidth}
     * @default `4`
     *
     * {@label numberwidth}
     */
    numberwidth: number;

    /**
     * Number of spaces that a \<Tab\> in the file counts for. Also @see {@link softtabstop} option
     *
     * @see {@link https://neovim.io/doc/user/options.html#'tabstop'  doc for tabstop}
     * @default `8`
     *
     * {@label tabstop}
     */
    tabstop: number;

    /**
     * Number of spaces that a \<Tab\> counts for while performing editing
     * operations, like inserting a \<Tab\> or using \<BS\>.  It "feels" like \<Tab\>s
     * are being inserted, while in fact a mix of spaces and \<Tab\>s
     * is used.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'softtabstop' doc for softtabstop}
     * @default `0`
     *
     * {@label softtabstop}
     */
    softtabstop: number;

    /**
     * Number of spaces to use for each step of (auto)ident.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'shiftwidth' doc for shiftwidth}
     * @default `8`
     *
     * {@label shiftwidth}
     */
    shiftwidth: number;

    /**
     * In Insert mode: Use the appropriate number of spaces to insert a \<Tab\>
     *
     * @see {@link https://neovim.io/doc/user/options.html#'expandtab' doc for expandtab}
     * @default `false`
     *
     * {@label expandtab}
     */
    expandtab: boolean;

    /**
     * Do smart autoidenting when starting a new line. Works for C-like programs, but
     * can also be used for other languages
     *
     * @see {@link https://neovim.io/doc/user/options.html#'smartindent' doc for smartident}
     * @default `false`
     *
     * {@label smartident}
     */
    smartindent: boolean;

    /**
     * This option changes how text is displayed. It doesn't change the text in the buffer,
     * @see {@link textwidth} for that
     *
     * When on, lines longer than the width of the window will wrap and displaying continues on
     * the next line
     *
     *
     * @see {@link https://neovim.io/doc/user/options.html#'wrap' doc for wrap}
     * @default `true`
     *
     * {@label wrap}
     */
    wrap: boolean;

    /**
     * Use a swapfile for the buffer
     *
     * @see {@link https://neovim.io/doc/user/options.html#'swapfile' doc for swapfile}
     * @default `true`
     *
     * {@label swapfile}
     */
    swapfile: boolean;

    /**
     * Make a backup before overwriting a file. Leave it around
     * after the file has been successfully written
     *
     * @see {@link https://neovim.io/doc/user/options.html#'backup' doc for backup}
     * @default false
     *
     * {@label backup}
     */
    backup: boolean;

    /**
     * List of directory names for undo files, separated with commas.
     * @see {@link backupdir} for details of the format.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'undodir' doc for undodir }
     * @default `$XDG_STATE_HOME/nvim/undo/`
     *
     * {@label undodir}
     */
    undodir: string;

    /**
     * When on, Vim automatically saves undo history to an file undo file when
     * writing a buffer to a file and restores undo history from the same file
     * on buffer read
     *
     * @see {@link https://neovim.io/doc/user/options.html#'undofile' doc for undofile }
     * @default `false`
     *
     * {@label undofile}
     */
    undofile: boolean;

    /**
     * When there is a previous search pattern, highlight all its matches
     *
     * @see {@link https://neovim.io/doc/user/options.html#'hlsearch' doc for hlsearch }
     * @default `true`
     *
     * {@label hlsearch}
     */
    hlsearch: boolean;

    /**
     * While typing a search command, show where the pattern, as it was typed
     * so far, matches. The matched string is highlighted. If the pattern is invalid
     * or not found, nothing is shown
     *
     * @see {@link https://neovim.io/doc/user/options.html#'incsearch' doc for incsearch }
     * @default `true`
     *
     * {@label incsearch}
     */
    incsearch: boolean;

    /**
     * Enables 24-bit RGB color in the TUI
     *
     * @see {@link https://neovim.io/doc/user/options.html#'termguicolors' doc for termguicolors}
     * @default `false`
     *
     * {@label termguicolors}
     */
    termguicolors: boolean;

    /**
     * Minimal number of screen lines to keep above and below the cursor. This will make some
     * context visible around where you are working.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'scrolloff' doc for scrolloff}
     * @default `0`
     *
     * {@label scrolloff}
     */
    scrolloff: number;

    /**
     * When and how to draw the signcolumn
     *
     * @see {@link https://neovim.io/doc/user/options.html#'signcolumn' doc for signcolumn}
     * @default `auto`
     *
     * {@label signcolumn}
     */
    signcolumn: "auto" | "no" | "yes" | "number";

    /**
     * Time in milliseconds to wait for a mapped sequence to complete.
     *
     * @see {@link https://neovim.io/doc/user/options.html#'timeoutlen' doc for timeoutlen }
     * @default 50
     *
     * {@label timeoutlen}
     */
    timeoutlen: number;

    /**
     * This option and @see {@link timeoutlen} determine the behaviour when part of a
     * mapped sequence has been received
     *
     * @see {@link https://neovim.io/doc/user/options.html#'timeout' doc for timeout}
     * @default true
     *
     * {@label timeout}
     */
    timeout: boolean;

    /**
     * The value of this option influences when the last window will have a
     * status line:
     *  0: never
     *  1: only if there are at least two windows
     *  2: always
     *  3: always and ONLY the last window
     *
     * The screen looks nicer with a status line if you have several windows, but it
     * takes another screen line
     *
     *
     * @see {@link https://neovim.io/doc/user/options.html#'laststatus' doc for laststatus}
     * @default 2
     *
     * {@label laststatus}
     */
    laststatus: 0 | 1 | 2 | 3;

    shell: string;
    wildignore: string;
  }
  export const opt: VimOptions;

  type VimMode =
    | "i" // Insert Mode
    | "n" // Normal Mode
    | "v" // Visual Mode
    | "t"; // Terminal Mode

  export type keymapOpts = {
    desc: string;
    buffer: number | boolean;
  };

  export const keymap: {
    /** @noSelf */
    set(
      mode: VimMode | VimMode[],
      key: string,
      fn: string | (() => void),
      opts?: Partial<keymapOpts>
    ): void;
  };

  type LspFormatOptions = {
    /** @noSelf */
    filter(client: { name: string }): boolean;
    timeout_ms: number;
  };

  type VimLsp = {
    buf: {
      /** @noSelf */
      format(opts: Partial<LspFormatOptions>): void;

      signature_help(): void;
    };
  };

  export const lsp: VimLsp;

  /** @noSelf */
  export const cmd: (cmd: string) => void;

  type VimVariables = {
    mapleader: string;
  };

  export const g: VimVariables;

  type VimDiagnosticConfig = {
    underline: boolean;
    virtual_text: boolean;
    signs: boolean;
    float: boolean;
    update_in_insert: boolean;
    serverity_sort: boolean;
  };
  export const diagnostic: {
    /** @noSelf */
    config(config: Partial<VimDiagnosticConfig>): void;
  };

  /** @noSelf */
  export interface VimFunctions {
    expand(arg: string): string;
    bufadd(name: string): number;
    fnamemodify(fileName : string, mods : string) : string;
  }

  export const fn: VimFunctions;

  type BufOptionsWithValueType = {
    buflisted: boolean;
  };

  /** @noSelf */
  export interface VimApi {
    nvim_create_buf(listed: boolean, scratch: boolean): number;
    nvim_buf_get_name(bufnr: number): string;
    nvim_set_current_buf(bufnr: number): void;
    nvim_buf_set_option<Opt extends keyof BufOptionsWithValueType>(
      bufnr: number,
      optionName: Opt,
      value: BufOptionsWithValueType[Opt]): void;
  }
  export const api: VimApi;

  /** @noSelf */
  export interface VimFs {
    basename(file: string): string;
    dirname(dirname: string): string;
    normalize(path: string): string;
  }

  export const fs: VimFs;

  /** @noSelf */
  export interface VimLoop {
    cwd(): string;
  }

  export const loop: VimLoop;

  export function inspect(value : unknown) : void;
}
