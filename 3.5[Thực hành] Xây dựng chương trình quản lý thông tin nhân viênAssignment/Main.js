"use strict";
exports.__esModule = true;
var Staffs_1 = require("./Staffs");
var Staffs_2 = require("./Staffs");
var employeeList = [];
employeeList.push(new Staffs_1.Employee("Nguyen Van A", Staffs_2.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Staffs_1.Employee("Tran Thi A", Staffs_2.Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Staffs_1.Employee("Huynh An Nhien", Staffs_2.Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(function (employee) { console.log(employee); });
// employeeList.forEach(showEmployee);
