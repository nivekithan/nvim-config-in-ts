/** @noResolution @noSelf */
declare module "packer" {
  type PluginSpec = {
    1: string;
    disable: boolean;
    as: string;
    installer: () => void;
    updater: () => void;
    after: string | string[];
    rtp: string;
    opt: boolean;
    bufread: string;
    branch: string;
    tag: string;
    commit: string;
    lock: boolean;
    run: string | (() => void) | Object;
    requires: (string | RequiredPluginSpec)[];
    rocks: string | string[];
    config: string | (() => void);
    setup: string | (() => void);
    cmd: string | string[];
    /**
     * TODO:
     * - Add all other options
     */
  };

  type RequiredPluginSpec = Pick<PluginSpec, 1> & Partial<Omit<PluginSpec, 1>>;
  type UseFn = (plugin: RequiredPluginSpec | string) => void;
  export function startup(cb: (use: UseFn) => void): void;
}
