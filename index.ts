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
                output!.innerHTML += String(this.operation(Number(this.content)))
            });
        }
    }
}

const fatherElement = document.querySelector('#main');
const output = document.querySelector('.output')

const creatButtoms = [
    {
        content: "7",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "8",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "9",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "+",
        type: "operator",
        operation: (n) => {return n}
    },
    {
        content: "4",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "5",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "6",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "-",
        type: "operator",
        operation: (n) => {return n}
    },
    {
        content: "1",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "2",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "3",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "/",
        type: "operator",
        operation: (n) => {return n}
    },
    {
        content: "AC",
        type: "result",
        operation: (n) => {return n}
    },
    {
        content: "0",
        type: "number",
        operation: (n) => {return n}
    },
    {
        content: "=",
        type: "result",
        operation: (n) => {return n}
    },
    {
        content: "X",
        type: "operator",
        operation: (n) => {return n}
    }
];

const buttomsObj: IterativeElement[] = [];

const orderButtons: IterativeElement[][] = [[]]

function appInit(): void {
    generateButtoms();
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

        a.map((b, n) => {
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

appInit();
