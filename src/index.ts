// src/index.ts
import { serialize, deserialize } from './serializer';

const serializeBtn = document.getElementById('serializeBtn');
const deserializeBtn = document.getElementById('deserializeBtn');
const resultDiv = document.getElementById('result');

if (serializeBtn && deserializeBtn && resultDiv) {
  serializeBtn.addEventListener('click', () => {
    const data = { name: 'yasaswini',age: '22' };
    const serializedData = serialize(data);
    resultDiv.innerText = `Serialized Data: ${serializedData}`;
  });

  deserializeBtn.addEventListener('click', () => {
    const jsonString = '{"name":"yasaswini","age":"22"}';
    const deserializedData = deserialize(jsonString);
    resultDiv.innerText = `Deserialized Data: ${JSON.stringify(deserializedData)}`;
  });
}


