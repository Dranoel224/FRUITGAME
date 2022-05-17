let fruitsout = ['🍊', '🍋', '🍉', '🍎']
function init () {
    let out = document.getElementById('fruitsout')
    let str = fruitsout.join("<br>")
    out.innerHTML = str
}

function unShiftFruit() {
    let fruitInput = document.getElementById('fruit')
    if(fruitInput.value =="") return false;
    fruitsout.unShift(fruitInput.value);
    init()
}

function pushFruit() {
    let fruitInput = document.getElementById('fruit')
    if(fruitInput.value =="") return false;
    fruitsout.push(fruitInput.value);
    init()
}

function popFruit() {
    let fruitInput = document.getElementById('fruit')
    if(fruitInput.value =="") return false;
    fruitsout.pop(fruitInput.value);
    init()
}

function shiftFruit() {
    let fruitInput = document.getElementById('fruit')
    if(fruitInput.value =="") return false;
    fruitsout.Shift(fruitInput.value);
    init()
}