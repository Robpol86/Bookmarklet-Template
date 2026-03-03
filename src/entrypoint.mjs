/**
 * Entrypoint of the bookmarklet.
 */

import { Log } from "./log.mjs";
import { main } from "./main.mjs";

/**
 * Entrypoint function of the bookmarklet.
 */
function entrypoint() {
    const log = new Log();
    log.debug(__FNAME_LINENO__, "Start");
    try {
        return main();
    } finally {
        log.debug(__FNAME_LINENO__, "End");
    }
}

// Call immediately (required for Terser to produce IIFE).
entrypoint();
