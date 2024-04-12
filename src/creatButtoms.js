"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatButtoms = void 0;
exports.creatButtoms = [
    {
        content: "7",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "8",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "9",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "+",
        type: "operator",
        operation: (n, n2) => { return n + n2; }
    },
    {
        content: "4",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "5",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "6",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "-",
        type: "operator",
        operation: (n, n2) => { return n2 - n; }
    },
    {
        content: "1",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "2",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "3",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "/",
        type: "operator",
        operation: (n, n2) => { return n2 / n; }
    },
    {
        content: "AC",
        type: "result",
        operation: () => { return ''; }
    },
    {
        content: "0",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "=",
        type: "result",
        operation: (o, i, n, n1) => {
            return o[i](n, n1);
        }
    },
    {
        content: "X",
        type: "operator",
        operation: (n, n2) => { return n * n2; }
    }
];
