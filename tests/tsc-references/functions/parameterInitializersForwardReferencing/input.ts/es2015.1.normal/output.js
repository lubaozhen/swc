function left(a, b = a, c = b) {
    a;
    b;
}
function right(a = b, b1 = a) {
    a;
    b1;
}
function right2(a = b, b1 = c, c1 = a) {
    a;
    b1;
    c1;
}
function inside(a = b) {
    var b1;
}
function outside() {
    var b;
    function inside(a = b) {
        var b1;
    }
}
function defaultArgFunction(a = function() {
    return b;
}, b1 = 1) {
}
function defaultArgArrow(a = ()=>()=>b
, b1 = 3) {
}
class C {
    method(a = b, b1 = 1) {
    }
    constructor(a = b, b1 = 1){
    }
}
// Function expressions
var x = (a = b, b1 = c, c1 = d)=>{
    var d;
};
// Should not produce errors - can reference later parameters if they occur within a function expression initializer.
function f(a, b = function() {
    return c;
}, c1 = b()) {
}
