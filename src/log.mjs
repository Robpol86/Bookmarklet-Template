/**
 * Convenience class for logging.
 */

/**
 * Log messages to console with a project key and caller key.
 *
 * The user can filter log messages specific to the bookmarklet using the project key. The caller key is useful to quickly
 * pinpoint where the log message was emitted from. TODO.
 */
export class Log {
    #projectKey = "BOOKMARKLET";

    /**
     * Log an error.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.error().
     */
    error(message, ...args) {
        console.error(this.#projectKey, message, ...args);
    }

    /**
     * Log an info message.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.log().
     */
    info(message, ...args) {
        console.log(this.#projectKey, message, ...args);
    }

    /**
     * Log a debug message.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.debug().
     */
    debug(message, ...args) {
        console.debug(this.#projectKey, message, ...args);
    }
}
