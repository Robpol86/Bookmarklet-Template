/**
 * The bookmarklet's main code.
 */

import { Log } from "./log.mjs";


/**
 * Main function.
 */
export async function main() {
    const log = new Log("main()");

    // Enforce single instance.
    if (window.__BOOKMARKLET_RUNNING__) return log.error("Another instance already running.");
    window.__BOOKMARKLET_RUNNING__ = true;

    try {
        // Show alert.
        alert("Hello World");
    } finally {
        window.__BOOKMARKLET_RUNNING__ = false;
    }
}
