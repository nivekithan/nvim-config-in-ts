/** @noResolution @noSelf */
declare module "harpoon.mark" {
    export function add_file(): void;
}

/** @noResolution @noSelf */
declare module "harpoon.ui" {
    export function toggle_quick_menu(): void;
    export function nav_file(file_index: number): void;
}
