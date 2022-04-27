export class Employee {
    fullName: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";
constructor(fullName:string, gender:Gender, birthday:Date, email:string,phoneNumber:string) {
    this.fullName = fullName;
    this.gender = gender;
    this.birthday = birthday;
    this.email = email;
    this.phoneNumber = phoneNumber;
}
}



export enum Gender {MALE,FEMALE,OTHER}