//class
var IterativeElement = /** @class */ (function () {
    function IterativeElement(content, type) {
        this.content = content;
        this.type = type;
    }
    return IterativeElement;
}());
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
var buttomsObj = [];
var sum = function (numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};
//start functions
function appInit() {
    //generate the buttoms
    generateButtoms();
}
//generate the buttoms functions
function generateButtoms() {
    for (var i = 0; i < creatButtoms.length; i++) {
        buttomsObj.push(new IterativeElement(creatButtoms[i].content, creatButtoms[i].type));
    }
    drawButtoms();
}
function drawButtoms() {
    var collum = 0;
    var iNumber = 0;
    for (var i = 0; i <= buttomsObj.length; i++) {
        if (i = buttomsObj.length) {
            collum = Math.ceil(Math.sqrt(i));
        }
        else {
            if (buttomsObj.length % i == 0) {
                collum = i;
                break;
            }
        }
    }
    for (var i = 0; i < collum; i++) {
        iNumber = (i * collum);
        //creat collum
        var d = document.createElement('div');
        d.id = "".concat(i);
        fatherElement === null || fatherElement === void 0 ? void 0 : fatherElement.appendChild(d);
        d.classList.add('collum');
        var dElement = document.getElementById("".concat(i));
        //push elements for collum
        for (var x = iNumber; x < (buttomsObj.length / collum) + iNumber; x++) {
            //create buttom element
            var e = document.createElement('button');
            e.textContent = buttomsObj[x].content;
            e.className = buttomsObj[x].type;
            dElement === null || dElement === void 0 ? void 0 : dElement.appendChild(e);
        }
    }
}
appInit();
