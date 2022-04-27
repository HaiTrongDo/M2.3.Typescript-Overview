"use strict";
exports.__esModule = true;
exports.Gender = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phoneNumber) {
        this.fullName = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
exports.Employee = Employee;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
