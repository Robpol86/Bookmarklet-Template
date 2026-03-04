/**
 * The bookmarklet's main code.
 */

import { logDebug } from "./log.mjs";

/**
 * Main function.
 */
export function main() {
    // Show alert.
    logDebug(__FNAME_LINENO__, "Show alert");
    alert("Hello World");
}
