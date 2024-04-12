//ageitar a divisão

import { outPutWidth } from "./style";
import { fixedStyle } from "./fixedStyle";
import { creatButtoms } from "./creatButtoms";

fixedStyle()

//classes
class IterativeElement {
    public readonly content: string;
    public type: string;
    public operation: any;

    constructor(content: string, type: string, operation:any) {
        this.content = content;
        this.type = type;
        this.operation = operation;
    }

    addOperation(obj: HTMLElement){
        if(this.type == "number"){
            obj.addEventListener('click', () => {
                breakNum.unshift(this.operation(Number(this.content)))
                output!.innerHTML = String(breakToNum(breakNum))

            });
        }
        if(this.type == "result"){
            obj.addEventListener('click', () => {
                output!.innerHTML = this.content == "AC" ? this.operation() : this.operation(operations, operationStory, breakToNum(breakNum), result)
                result = this.content == "AC" ? null : this.operation(operations, operationStory, breakToNum(breakNum), result)
                breakNum = []
            })
        }
        if(this.type == "operator"){
            obj.addEventListener('click', () => {
                if(result == null){
                    result = breakToNum(breakNum)
                }else{
                    if(breakNum.length && operationStory != null){
                        result = operations[operationStory](breakToNum(breakNum), result)
                        output!.innerHTML = String(result)
                    }
                }

                breakNum = []
                
                operationMap.push(this.content)
                operations.push(this.operation)

                operationStory = operationMap.findIndex((c) => c === this.content)
            })
        }
    }
}

const fatherElement = document.querySelector('#main');
const output = document.querySelector('.output')

let breakNum:number[] = []
let result:number | null = null
let operationStory:number | null = null
let operations: any[] = []
let operationMap: any[] = []

const buttomsObj: IterativeElement[] = [];

const orderButtons: IterativeElement[][] = [[]]

function appInit(): void {
    generateButtoms(  );
}

function generateButtoms(): void {
    creatButtoms.forEach(b => {
        buttomsObj.push(new IterativeElement(b.content, b.type, b.operation));
    });

    drawButtoms();
}


function drawButtoms(): void {
    const line: number =  Math.ceil(Math.sqrt(buttomsObj.length));
    const collum: number = Math.ceil(buttomsObj.length / line)

    for(let i = 1; i < line; i++){
        orderButtons.push([])
    }
    
    outPutWidth(collum)

    let i = 1
    let n = 1
    let m = 1
    let e = 0

    while(i <= (collum * line) + line){

        if(n <= line + 1){
            if(m <= collum){
                if(e < buttomsObj.length){
                    orderButtons[n - 1][m - 1] = new IterativeElement(buttomsObj[e].content, buttomsObj[e].type, buttomsObj[e].operation)
                }else{
                    orderButtons[n - 1][m - 1] = new IterativeElement('null', 'null', creatButtoms[1].operation)
                }

                m++
                e++
            }else{
                n ++ 
                m = 1
            }
        }
        i++
    }

    orderButtons.map((a, q) => {

        const d: HTMLElement = document.createElement('div');
        d.id = `${q}`;
        fatherElement?.appendChild(d);
        d.classList.add('collum');
        const dElement = document.getElementById(`${q}`);

        a.map((b) => {
            const e: HTMLElement = document.createElement('button');
            if(b.type != 'null'){
                e.textContent = b.content;
                e.className = b.type;
                dElement?.appendChild(e);
                b.addOperation(e);
            }
        })
    })


}

function breakToNum(bA:number[]){
    let n = 0
    for(let i = 0; i < bA.length; i++){
        n += bA[i] * Math.pow(10, i)
    }
    return n
}

appInit();