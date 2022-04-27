"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
var Employees = /** @class */ (function () {
    function Employees(fullName, gender, birthday, email, phoneNumber) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    Employees.prototype.displayEmployeeName = function () {
        return this.fullName;
    };
    return Employees;
}());
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
function CreateEmployees(object) {
    employeeList.push(object);
}
function deleteEmployee(index) {
    employeeList.splice(index, 1);
}
var employeeList = [];
var ManagerHai = new Employees("Do Trong Hai", Gender.MALE, 1991, "haido@gmail.com", "1234567890");
var staffThinhLe = new Employees("Thinh Le", Gender.MALE, 2001, "thinhle@gmail.com", "0987654321");
var staffAnNguyen = new Employees("An Nguyen", Gender.OTHER, 1999, "annguyen@gmail.com", "6789012345");
var staffDungNguyen = new Employees("Dung Nguyen", Gender.FEMALE, 2000, "dungnguyen@gmail.com", "1238904567");
CreateEmployees(ManagerHai);
CreateEmployees(staffThinhLe);
CreateEmployees(staffAnNguyen);
CreateEmployees(staffDungNguyen);
console.log(employeeList);
var hai = ManagerHai.displayEmployeeName();
console.log(hai);
deleteEmployee(0);
console.log(employeeList);
