class Employees {

    fullName: string;
    gender: Gender;
    birthday: number;
    email: string;
    phoneNumber: string;

    constructor(fullName: string,
                gender: Gender,
                birthday: number,
                email: string,
                phoneNumber: string) {

        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    displayEmployeeName(): string {
        return this.fullName
    }
}
export enum Gender {MALE ="MALE", FEMALE = "FEMALE", OTHER = "OTHER"}


    function CreateEmployees(object):void {
        employeeList.push(object)
    }

    function deleteEmployee(index:number):void{
        employeeList.splice(index,1)
    }

let employeeList: Employees[] = []
let ManagerHai = new Employees("Do Trong Hai", Gender.MALE, 1991, "haido@gmail.com","1234567890")
let staffThinhLe = new Employees("Thinh Le", Gender.MALE, 2001, "thinhle@gmail.com","0987654321")
let staffAnNguyen = new Employees("An Nguyen", Gender.OTHER, 1999, "annguyen@gmail.com","6789012345")
let staffDungNguyen = new Employees("Dung Nguyen", Gender.FEMALE, 2000, "dungnguyen@gmail.com","1238904567")
CreateEmployees(ManagerHai);
CreateEmployees(staffThinhLe);
CreateEmployees(staffAnNguyen);
CreateEmployees(staffDungNguyen);

console.log(employeeList);
let hai = ManagerHai.displayEmployeeName();
console.log(hai);
deleteEmployee(0)
console.log(employeeList);
