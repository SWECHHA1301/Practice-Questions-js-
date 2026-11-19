function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

function subtract(a, b, callback) {
    let result = a - b;
    callback(result);
}

function multiply(a, b, callback) {
    let result = a * b;
    callback(result);
}

function divide(a, b, callback) {
    let result = a / b;
    callback(result);
}

add(10, 5, function(ans) {
    console.log("Addition:", ans);

    subtract(ans, 5, function(ans) {
        console.log("Subtraction:", ans);

        multiply(ans, 2, function(ans) {
            console.log("Multiplication:", ans);

            divide(ans, 4, function(ans) {
                console.log("Division:", ans);
            });
        });
    });
});