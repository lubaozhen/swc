//@target: ES6
var x, y;
var array = [
    {
        x: "",
        y: true
    }
];
var E;
(function(E) {
    E[E["x"] = 0] = "x";
})(E || (E = {
}));
for ({ x , y =E.x  } of array){
    x;
    y;
}
