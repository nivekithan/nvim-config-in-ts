/** @noResolution @noSelf */
declare module "nvim-treesitter.configs" {
    type SetupConfig = {
        ensure_installed: string[];
        sync_install: boolean;
        highlight: { enable: boolean, additional_vim_regex_higlighting: boolean }
    }
    export function setup(config : SetupConfig): void;

}
