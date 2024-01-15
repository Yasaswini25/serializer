"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const serializer_1 = require("./serializer");
const serializeBtn = document.getElementById('serializeBtn');
const deserializeBtn = document.getElementById('deserializeBtn');
const resultDiv = document.getElementById('result');
if (serializeBtn && deserializeBtn && resultDiv) {
    serializeBtn.addEventListener('click', () => {
        const data = { name: 'yasaswini', age: '22' };
        const serializedData = (0, serializer_1.serialize)(data);
        resultDiv.innerText = `Serialized Data: ${serializedData}`;
    });
    deserializeBtn.addEventListener('click', () => {
        const jsonString = '{"name":"yasaswini","age":"22"}';
        const deserializedData = (0, serializer_1.deserialize)(jsonString);
        resultDiv.innerText = `Deserialized Data: ${JSON.stringify(deserializedData)}`;
    });
}
