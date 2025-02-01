"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
(function runTests() {
    return __awaiter(this, void 0, void 0, function () {
        var testCases, _i, testCases_1, testCase, resultText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Initialize the Chrome WebDriver
                    cnst;
                    return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('chrome').build()];
                case 1:
                    selenium_webdriver_1.WebDriver = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, , 20, 22]);
                    // Open the HTML form page
                    return [4 /*yield*/, driver.get('file:///home/abhijit/Blood-Pact-Using-Blockchain/frontend/index.html')];
                case 3:
                    // Open the HTML form page
                    _a.sent();
                    testCases = [
                        {
                            name: 'Valid Case',
                            inputs: {
                                name: 'John Doe',
                                age: '30',
                                password: 'password',
                                email: 'johndoe@example.com',
                                rewritePassword: 'password',
                            },
                            expectedResult: 'Name: John Doe\nAge: 30\nEmail: johndoe@example.com\nPassword: ********\nRewrite Password: ********',
                        },
                        {
                            name: 'Empty Fields',
                            inputs: {
                                name: '',
                                age: '',
                                password: '',
                                email: '',
                                rewritePassword: '',
                            },
                            expectedResult: 'Please fill in all fields.',
                        },
                        {
                            name: 'Invalid Email',
                            inputs: {
                                name: 'Alice',
                                age: '25',
                                password: 'pass1234',
                                email: 'invalid-email',
                                rewritePassword: 'pass1234',
                            },
                            expectedResult: 'Name: Alice\nAge: 25\nEmail: invalid-email\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
                        },
                        {
                            name: 'Password Mismatch',
                            inputs: {
                                name: 'Bob',
                                age: '35',
                                password: 'pass1234',
                                email: 'bob@example.com',
                                rewritePassword: 'mismatch',
                            },
                            expectedResult: 'Name: Bob\nAge: 35\nEmail: bob@example.com\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
                        },
                        {
                            name: 'Short Password',
                            inputs: {
                                name: 'Eve',
                                age: '28',
                                password: 'short',
                                email: 'eve@example.com',
                                rewritePassword: 'short',
                            },
                            expectedResult: 'Name: Eve\nAge: 28\nEmail: eve@example.com\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
                        },
                    ];
                    _i = 0, testCases_1 = testCases;
                    _a.label = 4;
                case 4:
                    if (!(_i < testCases_1.length)) return [3 /*break*/, 19];
                    testCase = testCases_1[_i];
                    // Fill in the form fields
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('name')).sendKeys(testCase.inputs.name)];
                case 5:
                    // Fill in the form fields
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('age')).sendKeys(testCase.inputs.age)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('password')).sendKeys(testCase.inputs.password)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('email')).sendKeys(testCase.inputs.email)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('rewritePassword')).sendKeys(testCase.inputs.rewritePassword)];
                case 9:
                    _a.sent();
                    // Submit the form
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.css("input[type='submit']")).click()];
                case 10:
                    // Submit the form
                    _a.sent();
                    // Wait for the result to be displayed
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('result'), 10000))];
                case 11:
                    // Wait for the result to be displayed
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('result')).getText()];
                case 12:
                    resultText = _a.sent();
                    if (resultText === testCase.expectedResult) {
                        console.log("Test '".concat(testCase.name, "' passed."));
                    }
                    else {
                        console.log("Test '".concat(testCase.name, "' failed."));
                    }
                    // Clear the form fields for the next test
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('name')).clear()];
                case 13:
                    // Clear the form fields for the next test
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('age')).clear()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('password')).clear()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('email')).clear()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('rewritePassword')).clear()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    _i++;
                    return [3 /*break*/, 4];
                case 19: return [3 /*break*/, 22];
                case 20: 
                // Close the browser
                return [4 /*yield*/, driver.quit()];
                case 21:
                    // Close the browser
                    _a.sent();
                    return [7 /*endfinally*/];
                case 22: return [2 /*return*/];
            }
        });
    });
})();
