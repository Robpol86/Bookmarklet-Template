/**
 * The bookmarklet's main code.
 */

import { cDebug } from "./log.mjs";

/**
 * Main function.
 */
export function main() {
    // Show alert.
    cDebug(__FNAME_LINENO__, "Show alert");
    alert("Hello World");
}
