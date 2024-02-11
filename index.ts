//class

class IterativeElement {
    public readonly content: string;
    public type: string;

    constructor(content: string, type: string) {
        this.content = content;
        this.type = type;
    }
}

//variables

var fatherElement = document.querySelector('#main');
var creatButtoms = [
    {
        content: '7',
        type: 'number'
    },
    {
        content: '8',
        type: 'number'
    },
    {
        content: '9',
        type: 'number'
    },
    {
        content: '/',
        type: 'operator'
    },
    {
        content: '4',
        type: 'number'
    },
    {
        content: '5',
        type: 'number'
    },
    {
        content: '6',
        type: 'number'
    },
    {
        content: '*',
        type: 'operator'
    },
    {
        content: '1',
        type: 'number'
    },
    {
        content: '2',
        type: 'number'
    },
    {
        content: '3',
        type: 'number'
    },
    {
        content: '-',
        type: 'operator'
    },
    {
        content: 'AC',
        type: 'operator'
    },
    {
        content: '0',
        type: 'number'
    },
    {
        content: '=',
        type: 'operator'
    },
    {
        content: '+',
        type: 'oparator'
    }
];
var buttomsObj: IterativeElement[] = [];

var sum = (numbers: number[]): number => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};

//start functions

function appInit() {

    //generate the buttoms
    generateButtoms()
}

//generate the buttoms functions

function generateButtoms(){
    for (let i = 0; i < creatButtoms.length; i++){
        buttomsObj.push(new IterativeElement(creatButtoms[i].content, creatButtoms[i].type));
    }

    drawButtoms()
}

function drawButtoms(){
    let collum:number = 0;
    let iNumber:number = 0;
    
    for(let i = 0; i <= buttomsObj.length; i++){
        if(i = buttomsObj.length){
            collum = Math.ceil(Math.sqrt(i)) 
        }else{if(buttomsObj.length % i == 0){collum = i; break;}} 
    }


    for(let i = 0;i < collum;i++){
        iNumber = (i * collum);
        //creat collum
        let d:HTMLElement = document.createElement('div')
        d.id = `${i}`
        fatherElement?.appendChild(d)
        d.classList.add('collum')
        let dElement = document.getElementById(`${i}`)

        //push elements for collum
        for(let x = iNumber; x < (buttomsObj.length / collum) + iNumber; x++){
            //create buttom element
            let e:HTMLElement = document.createElement('button')
            e.textContent = buttomsObj[x].content
            e.className = buttomsObj[x].type
            dElement?.appendChild(e)
        }
    }
    
}

appInit();