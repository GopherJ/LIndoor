export const isNotEmpty = function(x) {
    return x !== undefined && x !== null && x !== "";
};
export const isEmpty = function(x) {
    return !isNotEmpty(x);
};
export const isObject = function(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
};
export const isArray = function(x) {
    return Array.isArray(x);
};
export const isArrayHasLength = function(x) {
    return isArray(x) && x.length > 0;
};
export const isValidUserId = function(id) {
    return typeof id === "string" && id.length === 32;
};
export const isValidClientId = function(id) {
    return typeof id === "string" && id.length > 0;
};
export const isFunction = function(f) {
    return typeof f === "function";
};
export const isLevel = function(l) {
    return typeof l === "number" || !isNaN(parseInt(l, 10));
};
