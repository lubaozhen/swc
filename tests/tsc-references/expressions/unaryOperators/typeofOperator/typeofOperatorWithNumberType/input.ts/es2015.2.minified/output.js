var M;
class A {
    static foo() {
        return 1;
    }
}
!function(M) {
    var n;
    M.n = n;
}(M || (M = {
}));
var objA = new A();
objA.a, M.n, A.foo(), objA.a, M.n, objA.a, M.n;
z: ;
x: "object";
r: "function";
z: ;
z: objA.a;
z: ;
z: M.n;
