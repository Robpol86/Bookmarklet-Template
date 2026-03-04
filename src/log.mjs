/**
 * Logging functions.
 */

const PROJECT_KEY = "BOOKMARKLET";

/**
 * Log an error.
 *
 * @param {string} message - Log message.
 * @param {...*} args - Additional arguments passed to console.error().
 */
export function error(message, ...args) {
    console.error(PROJECT_KEY, message, ...args);
}

/**
 * Log an info message.
 *
 * @param {string} message - Log message.
 * @param {...*} args - Additional arguments passed to console.log().
 */
export function info(message, ...args) {
    console.log(PROJECT_KEY, message, ...args);
}

/**
 * Log a debug message.
 *
 * @param {string} message - Log message.
 * @param {...*} args - Additional arguments passed to console.debug().
 */
export function debug(message, ...args) {
    console.debug(PROJECT_KEY, message, ...args);
}
