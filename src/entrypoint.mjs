/**
 * Entrypoint of the bookmarklet.
 */

import { logDebug } from "./log.mjs";
import { main } from "./main.mjs";

/**
 * Entrypoint function of the bookmarklet.
 */
function entrypoint() {
    logDebug(__FNAME_LINENO__, "Start");
    try {
        return main();
    } finally {
        logDebug(__FNAME_LINENO__, "End");
    }
}

// Call immediately (required for Terser to produce IIFE).
entrypoint();
