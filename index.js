function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (!(a > b)) throw new Error("a must be greater than b");
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

add(5, 3);
add(10, 23);
add(40, 42);
add(100, 200);

subtract(10, 3);

multiply(5, 3);



