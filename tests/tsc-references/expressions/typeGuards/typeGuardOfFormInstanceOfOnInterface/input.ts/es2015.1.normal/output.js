var str;
var num;
var strOrNum;
var c1;
var c2;
var d1;
var c1Orc2;
str = c1Orc2 instanceof c1 && c1Orc2.p1; // C1
num = c1Orc2 instanceof c2 && c1Orc2.p2; // C2
str = c1Orc2 instanceof d1 && c1Orc2.p1; // C1
num = c1Orc2 instanceof d1 && c1Orc2.p3; // D1
var c2Ord1;
num = c2Ord1 instanceof c2 && c2Ord1.p2; // C2
num = c2Ord1 instanceof d1 && c2Ord1.p3; // D1
str = c2Ord1 instanceof d1 && c2Ord1.p1; // D1
var r2 = c2Ord1 instanceof c1 && c2Ord1; // C2 | D1
