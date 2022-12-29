/** @noResolution @noSelf */
declare module "lsp-zero" {
  export function preset(preset: "recommended"): void;
  export function ensure_installed(lspServers: string[]): void;
  export function nvim_workspace(): void;
  export function on_attach(cb: (client: unknown, bufnr: number) => void): void;
  export function setup(): void;
}
