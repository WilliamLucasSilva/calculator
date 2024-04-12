"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outPutWidth = void 0;
function outPutWidth(n) {
    let size = n * 35;
    let output = document.getElementById('output');
    output.style.maxWidth = `${size}px`;
}
exports.outPutWidth = outPutWidth;
