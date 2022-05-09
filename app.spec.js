"use strict";
// import { filterByTerm } from '../app'
exports.__esModule = true;
// describe("Filter function", () => {
//     test("it should filter by a search term (link)", () => {
//         const input = [
//             { id: 1, url: "https://www.url1.dev" },
//             { id: 2, url: "https://www.url2.dev" },
//             { id: 3, url: "https://www.link3.dev" }
//         ];
//
//         const output = [{ id: 3, url: "https://www.link3.dev" }];
//
//         expect(filterByTerm(input, "link")).toEqual(output);
//     });
// });
var app_1 = require("../app");
describe("add function", function () {
    test("add two number", function () {
        var number1 = 1;
        var number2 = 2;
        var result = 3;
        expect(app_1.Calculator.add(1, 2)).toBe(result);
    });
});
