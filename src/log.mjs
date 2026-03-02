/**
 * Convenience functions for logging.
 */

/**
 * Log messages to console with a project key and caller key.
 *
 * The use can filter log messages specific to the bookmarklet using the project key. The caller key is useful to quickly
 * pinpoint where the log message was emitted from.
 */
export class Log {
    #projectKey = "BOOKMARKLET";

    /**
     * Class constructor.
     *
     * @param {string} callerKey - Caller-provided key.
     */
    constructor(callerKey) {
        this.callerKey = callerKey;
    }

    /**
     * Log an error.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.error().
     */
    error(message, ...args) {
        console.error(this.#projectKey, this.callerKey, message, ...args);
    }

    /**
     * Log an info message.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.log().
     */
    info(message, ...args) {
        console.log(this.#projectKey, this.callerKey, message, ...args);
    }

    /**
     * Log a debug message.
     *
     * @param {string} message - Log message.
     * @param {...*} args - Additional arguments passed to console.debug().
     */
    debug(message, ...args) {
        console.debug(this.#projectKey, this.callerKey, message, ...args);
    }
}
