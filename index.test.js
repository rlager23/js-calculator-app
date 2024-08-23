const { appendToDisplay, clearDisplay, calculate } = require('./index');

describe("Calculator functions", () => {
    let display;

    beforeEach(() => {
        document.body.innerHTML = '<input id="display" value=""/>';
        display = document.getElementById("display");
    });

    test("appendToDisplay should add input to the display", () => {
        console.log(display.value)
        appendToDisplay("5");
        expect(display.value).toBe("5");

        appendToDisplay("+");
        expect(display.value).toBe("5+");

        appendToDisplay("3");
        expect(display.value).toBe("5+3");
    });

//     test("clearDisplay should clear the display", () => {
//         display.value = "12345";
//         clearDisplay();
//         expect(display.value).toBe("");
//     });

//     test("calculate should evaluate the expression in the display", () => {
//         display.value = "5+3";
//         calculate();
//         expect(display.value).toBe("8");

//         display.value = "10/2";
//         calculate();
//         expect(display.value).toBe("5");
//     });

//     test("calculate should show 'Error' for invalid expressions", () => {
//         display.value = "5++3";
//         calculate();
//         expect(display.value).toBe("Error");

//         display.value = "10/0";
//         calculate();
//         expect(display.value).toBe("Error");
//     });
 });
