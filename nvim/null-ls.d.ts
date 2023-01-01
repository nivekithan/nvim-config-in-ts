/** @noResolution @noSelf */
declare module "null-ls" {
    // I have no idea on what consitutes as NullLsSources
    // since we are not creating custom NullLsSources it should be fine
    type NullLsSources = {type : "NullLsSources"}

    type SetupArgs = {
        sources : NullLsSources[];
    };

    export function setup(setupArgs : Partial<SetupArgs>): void;

    export const builtins : {
        formatting: {
           prettier: NullLsSources;
        }
    }
}
