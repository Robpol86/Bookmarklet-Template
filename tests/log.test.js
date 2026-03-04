import { PROJECT_KEY, logDebug, logError, logInfo } from "../src/log.mjs";
import { afterEach, beforeEach, describe, expect, jest, test } from "@jest/globals";

describe("log", () => {
    let errorSpy;
    let logSpy;
    let debugSpy;

    beforeEach(() => {
        errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
        logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        debugSpy = jest.spyOn(console, "debug").mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("logError()", () => {
        test("calls console.error", () => {
            logError("something went wrong");
            expect(errorSpy).toHaveBeenCalledTimes(1);
        });

        test("prefixes output with PROJECT_KEY", () => {
            logError("something went wrong");
            expect(errorSpy).toHaveBeenCalledWith(PROJECT_KEY, "something went wrong");
        });

        test("does not call console.log or console.debug", () => {
            logError("something went wrong");
            expect(logSpy).not.toHaveBeenCalled();
            expect(debugSpy).not.toHaveBeenCalled();
        });

        test("passes additional arguments to console.error", () => {
            const err = new Error("boom");
            logError("something went wrong", err, { context: 42 });
            expect(errorSpy).toHaveBeenCalledWith(PROJECT_KEY, "something went wrong", err, { context: 42 });
        });

        test("works with no additional arguments", () => {
            expect(() => logError("bare message")).not.toThrow();
        });
    });

    describe("logInfo()", () => {
        test("calls console.log", () => {
            logInfo("started");
            expect(logSpy).toHaveBeenCalledTimes(1);
        });

        test("prefixes output with PROJECT_KEY", () => {
            logInfo("started");
            expect(logSpy).toHaveBeenCalledWith(PROJECT_KEY, "started");
        });

        test("does not call console.error or console.debug", () => {
            logInfo("started");
            expect(errorSpy).not.toHaveBeenCalled();
            expect(debugSpy).not.toHaveBeenCalled();
        });

        test("passes additional arguments to console.log", () => {
            logInfo("user loaded", { id: 7 }, "extra");
            expect(logSpy).toHaveBeenCalledWith(PROJECT_KEY, "user loaded", { id: 7 }, "extra");
        });

        test("works with no additional arguments", () => {
            expect(() => logInfo("bare message")).not.toThrow();
        });
    });

    describe("logDebug()", () => {
        test("calls console.debug", () => {
            logDebug("checkpoint reached");
            expect(debugSpy).toHaveBeenCalledTimes(1);
        });

        test("prefixes output with PROJECT_KEY", () => {
            logDebug("checkpoint reached");
            expect(debugSpy).toHaveBeenCalledWith(PROJECT_KEY, "checkpoint reached");
        });

        test("does not call console.error or console.log", () => {
            logDebug("checkpoint reached");
            expect(errorSpy).not.toHaveBeenCalled();
            expect(logSpy).not.toHaveBeenCalled();
        });

        test("passes additional arguments to console.debug", () => {
            logDebug("state", { x: 1 }, [2, 3]);
            expect(debugSpy).toHaveBeenCalledWith(PROJECT_KEY, "state", { x: 1 }, [2, 3]);
        });

        test("works with no additional arguments", () => {
            expect(() => logDebug("bare message")).not.toThrow();
        });
    });

    describe("PROJECT_KEY isolation", () => {
        test("each logger uses the same PROJECT_KEY prefix", () => {
            logError("e");
            logInfo("i");
            logDebug("d");

            expect(errorSpy.mock.calls[0][0]).toBe(PROJECT_KEY);
            expect(logSpy.mock.calls[0][0]).toBe(PROJECT_KEY);
            expect(debugSpy.mock.calls[0][0]).toBe(PROJECT_KEY);
        });
    });
});
