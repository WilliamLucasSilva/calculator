"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("./style");
console.log((0, style_1.outPutWidth)(3));
//classes
class IterativeElement {
    constructor(content, type, operation) {
        this.content = content;
        this.type = type;
        this.operation = operation;
    }
    addOperation(obj) {
        if (this.type == "number") {
            obj.addEventListener('click', () => {
                output.innerHTML += String(this.operation(Number(this.content)));
            });
        }
    }
}
const fatherElement = document.querySelector('#main');
const output = document.querySelector('.output');
const creatButtoms = [
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
        operation: (n) => { return n; }
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
        operation: (n) => { return n; }
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
        operation: (n) => { return n; }
    },
    {
        content: "AC",
        type: "result",
        operation: (n) => { return n; }
    },
    {
        content: "0",
        type: "number",
        operation: (n) => { return n; }
    },
    {
        content: "=",
        type: "result",
        operation: (n) => { return n; }
    },
    {
        content: "X",
        type: "operator",
        operation: (n) => { return n; }
    }
];
const buttomsObj = [];
const orderButtons = [[]];
function appInit() {
    generateButtoms();
}
function generateButtoms() {
    creatButtoms.forEach(b => {
        buttomsObj.push(new IterativeElement(b.content, b.type, b.operation));
    });
    drawButtoms();
}
function drawButtoms() {
    const line = Math.ceil(Math.sqrt(buttomsObj.length));
    const collum = Math.ceil(buttomsObj.length / line);
    for (let i = 1; i < line; i++) {
        orderButtons.push([]);
    }
    let i = 1;
    let n = 1;
    let m = 1;
    let e = 0;
    while (i <= (collum * line) + line) {
        if (n <= line + 1) {
            if (m <= collum) {
                if (e < buttomsObj.length) {
                    orderButtons[n - 1][m - 1] = new IterativeElement(buttomsObj[e].content, buttomsObj[e].type, buttomsObj[e].operation);
                }
                else {
                    orderButtons[n - 1][m - 1] = new IterativeElement('null', 'null', creatButtoms[1].operation);
                }
                m++;
                e++;
            }
            else {
                n++;
                m = 1;
            }
        }
        i++;
    }
    orderButtons.map((a, q) => {
        const d = document.createElement('div');
        d.id = `${q}`;
        fatherElement === null || fatherElement === void 0 ? void 0 : fatherElement.appendChild(d);
        d.classList.add('collum');
        const dElement = document.getElementById(`${q}`);
        a.map((b, n) => {
            const e = document.createElement('button');
            if (b.type != 'null') {
                e.textContent = b.content;
                e.className = b.type;
                dElement === null || dElement === void 0 ? void 0 : dElement.appendChild(e);
                b.addOperation(e);
            }
        });
    });
}
appInit();
