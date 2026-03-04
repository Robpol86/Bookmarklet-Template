/**
 * Entrypoint of the bookmarklet.
 */

import { cDebug } from "./log.mjs";
import { main } from "./main.mjs";

/**
 * Entrypoint function of the bookmarklet.
 */
function entrypoint() {
    cDebug(__FNAME_LINENO__, "Start");
    try {
        main();
    } finally {
        cDebug(__FNAME_LINENO__, "End");
    }
}

// Call immediately (required for Terser to produce IIFE).
entrypoint();
