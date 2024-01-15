"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = exports.serialize = void 0;
function serialize(data) {
    return JSON.stringify(data);
}
exports.serialize = serialize;
function deserialize(jsonString) {
    return JSON.parse(jsonString);
}
exports.deserialize = deserialize;
