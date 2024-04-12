"use strict";
//ageitar a divisão
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("./style");
const fixedStyle_1 = require("./fixedStyle");
const creatButtoms_1 = require("./creatButtoms");
(0, fixedStyle_1.fixedStyle)();
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
                breakNum.unshift(this.operation(Number(this.content)));
                output.innerHTML = String(breakToNum(breakNum));
            });
        }
        if (this.type == "result") {
            obj.addEventListener('click', () => {
                output.innerHTML = this.content == "AC" ? this.operation() : this.operation(operations, operationStory, breakToNum(breakNum), result);
                result = this.content == "AC" ? null : this.operation(operations, operationStory, breakToNum(breakNum), result);
                breakNum = [];
            });
        }
        if (this.type == "operator") {
            obj.addEventListener('click', () => {
                if (result == null) {
                    result = breakToNum(breakNum);
                }
                else {
                    if (breakNum.length && operationStory != null) {
                        result = operations[operationStory](breakToNum(breakNum), result);
                        output.innerHTML = String(result);
                    }
                }
                breakNum = [];
                operationMap.push(this.content);
                operations.push(this.operation);
                operationStory = operationMap.findIndex((c) => c === this.content);
            });
        }
    }
}
const fatherElement = document.querySelector('#main');
const output = document.querySelector('.output');
let breakNum = [];
let result = null;
let operationStory = null;
let operations = [];
let operationMap = [];
const buttomsObj = [];
const orderButtons = [[]];
function appInit() {
    generateButtoms();
}
function generateButtoms() {
    creatButtoms_1.creatButtoms.forEach(b => {
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
    (0, style_1.outPutWidth)(collum);
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
                    orderButtons[n - 1][m - 1] = new IterativeElement('null', 'null', creatButtoms_1.creatButtoms[1].operation);
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
        a.map((b) => {
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
function breakToNum(bA) {
    let n = 0;
    for (let i = 0; i < bA.length; i++) {
        n += bA[i] * Math.pow(10, i);
    }
    return n;
}
appInit();
