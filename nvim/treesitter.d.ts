/** @noResolution @noSelf */
declare module "nvim-treesitter.configs" {
    type SetupConfig = {
        ensure_installed: string[];
        sync_install: boolean;
        highlight: { enable: boolean, additional_vim_regex_higlighting: boolean };
        playground: { enable: boolean, presist_queries: boolean };
        auto_install : boolean;
    }
    export function setup(config:  Partial<SetupConfig>): void;

}
