export const creatButtoms = [
    {
        content: "7",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "8",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "9",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "+",
        type: "operator",
        operation: (n:number, n2:number) => {return n + n2}
    },
    {
        content: "4",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "5",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "6",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "-",
        type: "operator",
        operation: (n:number, n2:number) => {return n2 - n}
    },
    {
        content: "1",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "2",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "3",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "/",
        type: "operator",
        operation: (n:number, n2:number) => {return n2 / n}
    },
    {
        content: "AC",
        type: "result",
        operation: () => {return ''}
    },
    {
        content: "0",
        type: "number",
        operation: (n:any) => {return n}
    },
    {
        content: "=",
        type: "result",
        operation: (o:Funcao[], i:number, n:number, n1:number) => {
            return o[i](n,n1)}
    },
    {
        content: "X",
        type: "operator",
        operation: (n:number, n2:number) => {return n * n2}
    }
];

type Funcao = (n:number, n1:number) => number;