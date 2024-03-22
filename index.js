var IterativeElement = /** @class */ (function () {
    function IterativeElement(content, type, operation) {
        this.content = content;
        this.type = type;
        this.operation = operation;
    }
    IterativeElement.prototype.addOperation = function (obj) {
        var _this = this;
        if (this.type == "number") {
            obj.addEventListener('click', function () {
                output.innerHTML += String(_this.operation(Number(_this.content)));
            });
        }
    };
    return IterativeElement;
}());
var fatherElement = document.querySelector('#main');
var output = document.querySelector('.output');
var creatButtoms = [
    {
        content: "7",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "8",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "9",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "+",
        type: "operator",
        operation: function (n) { return n; }
    },
    {
        content: "4",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "5",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "6",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "-",
        type: "operator",
        operation: function (n) { return n; }
    },
    {
        content: "1",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "2",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "3",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "/",
        type: "operator",
        operation: function (n) { return n; }
    },
    {
        content: "AC",
        type: "result",
        operation: function (n) { return n; }
    },
    {
        content: "0",
        type: "number",
        operation: function (n) { return n; }
    },
    {
        content: "=",
        type: "result",
        operation: function (n) { return n; }
    },
    {
        content: "X",
        type: "operator",
        operation: function (n) { return n; }
    }
];
var buttomsObj = [];
var orderButtons = [[]];
function appInit() {
    generateButtoms();
}
function generateButtoms() {
    creatButtoms.forEach(function (b) {
        buttomsObj.push(new IterativeElement(b.content, b.type, b.operation));
    });
    drawButtoms();
}
function drawButtoms() {
    var line = Math.ceil(Math.sqrt(buttomsObj.length));
    var collum = Math.ceil(buttomsObj.length / line);
    for (var i_1 = 1; i_1 < line; i_1++) {
        orderButtons.push([]);
    }
    var i = 1;
    var n = 1;
    var m = 1;
    var e = 0;
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
    orderButtons.map(function (a, q) {
        var d = document.createElement('div');
        d.id = "".concat(q);
        fatherElement === null || fatherElement === void 0 ? void 0 : fatherElement.appendChild(d);
        d.classList.add('collum');
        var dElement = document.getElementById("".concat(q));
        a.map(function (b, n) {
            var e = document.createElement('button');
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
