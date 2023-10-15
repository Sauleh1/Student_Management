#!/usr/bin/env node

import inquirer from "inquirer";

class Students {
    Name: string;
    Age: number;
    Height: number;
    DateOfJoining: string;
    TutionFees: number;
    Course: string;
    constructor(a: string, b: number, c: number, d: string, e: number, f: string) {
        this.Name = a;
        this.Age = b;
        this.Height = c;
        this.DateOfJoining = d;
        this.TutionFees = e;
        this.Course = f;
    }
}

let SaulehsDetails = new Students("Sauleh", 11, 143.5, "2/8/2015", 12050, "Maths")
let WasaysDetails = new Students("Wasay", 13, 148.5, "19/8/2014", 13000, "PST, Islamiat")
let SarahsDetails = new Students("Sarah", 15, 148.7, "30/8/2012", 13000, "Urdu, Islamiat")
let KhalasDetails = new Students("Hira", 27, 142.1, "19/8/1998", 7000, "None")


const ManageStudents = await inquirer.prompt([
    {
        message: "Are you an admin or a student?",
        type: "list",
        choices: [`Admin`,`Student`],
        name: "AdminorStudent"
    }
])

const { AdminorStudent } = ManageStudents

if (AdminorStudent) {
    if (AdminorStudent === "Admin") {
        const AdminLogin = await inquirer.prompt([
            {
                message: "What is the Admin ID?",
                type: "number",
                name: "AdminPass"
            }
        ])
        const { AdminPass } = AdminLogin
        if (AdminPass) {
            if (AdminPass === 116655) {
                const what_to = await inquirer.prompt([
                    {
                        message: "What would you like to do?",
                        type: "list",
                        choices: [`Check Details`,`Add Student`],
                        name: "WhatToDo"
                    }
                ])
                const { WhatToDo } = what_to
                if (WhatToDo) {
                    if (WhatToDo === "Check Details") {
                        const WhoseDetails = await inquirer.prompt([
                            {
                                message: "Whose details would you like to see?",
                                type: "list",                                   
                                choices: [`Sauleh`,`Wasay`,`Sarah`,`Hira`],     
                                name: "Details_"
                            }
                        ])
                        const { Details_ } = WhoseDetails
                        if (Details_) {
                            if (Details_ === "Sauleh") {
                                console.log(`Saulehs details are: `);
                                console.log(SaulehsDetails);
                            }
                            else if (Details_ === "Wasay") {
                                console.log(`Wasays details are: `);
                                console.log(WasaysDetails);
                            }
                            else if (Details_ === "Sarah") {
                                console.log(`Sarahs details are: `);
                                console.log(SarahsDetails);
                            }
                            else if (Details_ === "Hira") {
                                console.log(`Hiras details are: `);
                                console.log(KhalasDetails);
                            }
                        }
                    }
                    else if (WhatToDo === "Add Student") {
                        const AddStudentDetails = await inquirer.prompt([
                            {
                                message: "Add the Name of new Student:",
                                type: "input",
                                name: "NameONewStudent"
                            },
                            {
                                message: "Add the Age of new Student:",
                                type: "number",
                                name: "AgeONewStudent",
                                validate: (input: number) => {
                                    if (isNaN(input)) {
                                        return "Must Enter A Number"
                                    }
                                    return true
                                }
                            },
                            {
                                message: "Add the Height of new Student:",
                                type: "number",
                                name: "HeightONewStudent",
                                validate: (input: number) => {
                                    if (isNaN(input)) {
                                        return "Must Enter A Number"
                                    }
                                    return true
                                }
                            },
                            {
                                message: "What are his courses?:",
                                type: "input",
                                name: "CoursesONewStudent"
                            },
                            {
                                message: "When Did he join?:",
                                type: "input",
                                name: "Joining_"
                            },
                            {
                                message: "Add the TuitionFees for the Students Courses:",
                                type: "number",
                                name: "FeesONewStudent",
                                validate: (input: number) => {
                                    if (isNaN(input)) {
                                        return "Tuition Fees must be a number."
                                    }
                                }
                            }
                        ])
                        let { NameONewStudent , AgeONewStudent , HeightONewStudent , CoursesONewStudent , Joining_, FeesONewStudent } = AddStudentDetails
                        const MakeDetailedObject = {
                            Name: NameONewStudent,
                            Age: AgeONewStudent,
                            Height: HeightONewStudent,
                            DateOJoining: Joining_,
                            Fees: FeesONewStudent,
                            Courses: CoursesONewStudent,
                        }
                        console.log(`You enrolled in a new Student! Here are the new Students Details:`);
                        console.log(MakeDetailedObject);
                    }
                }
            }
        }
    }
    else if (AdminorStudent === "Student") {
        console.log(`Type 9876 or 3142 or 1234 or 4455. (ID's for the Students)`);
        console.log(`--------------------------------------`);
        const LoginStudent_ = await inquirer.prompt([
            {
                message: "What is your ID?",
                type: "number",
                name: "StudentID"
            }
        ])
        const { StudentID } = LoginStudent_
        if (StudentID) {
            if (StudentID === 3142) {   
                const SeeDetails_ = await inquirer.prompt([
                    {
                        message: "Correct! Do you want to see your details?",
                        type: "list",
                        choices: [`Yes`,`No`],
                        name: "YesorNo"
                    }
                ])
                const { YesorNo } = SeeDetails_
                if (YesorNo) {
                    if (YesorNo === "Yes") {
                        console.log(`Here are your details:`);
                        console.log(SaulehsDetails);
                    }
                    else if (YesorNo === "No") {
                        console.log(`Ok, dont see your details.`);
                    }
                }
            }
            else if (StudentID === 1234) {                                                                             // 2
                const SeeDetails_2 = await inquirer.prompt([
                    {
                        message: `Correct! Do you want to see your details?`,
                        type: "list",
                        choices: [`Yes`,`No`],
                        name: "Seedetails2_"
                    }
                ])
                const { Seedetails2_ } = SeeDetails_2
                if (Seedetails2_) {
                    if (Seedetails2_ === "Yes") {
                        console.log(`Here are your Details:`);
                        console.log(WasaysDetails);
                    }
                    else if (Seedetails2_ === "No") {
                        console.log(`Ok, dont see your details.`);
                    }
                }
            }
            else if (StudentID === 4455) {
                const SeeDetails_3 = await inquirer.prompt([
                    {
                        message: `Correct! Do you want to see your details?`,
                        type: "list",
                        choices: [`Yes`,`No`],
                        name: "Seedetails3_"
                    }
                ])
                const { Seedetails3_ } = SeeDetails_3
                if (Seedetails3_) {
                    if (Seedetails3_ === "Yes") {
                        console.log(`Here are your Details:`);
                        console.log(SarahsDetails);
                    }
                    else if (Seedetails3_ === "No") {
                        console.log(`Ok, dont see your details.`);
                    }
                }
            }
            else if (StudentID === 9876) {
                const SeeDetails_4 = await inquirer.prompt([
                    {
                        message: `Correct! Do you want to see your details?`,
                        type: "list",
                        choices: [`Yes`,`No`],
                        name: "Seedetails4_"
                    }
                ])
                const { Seedetails4_ } = SeeDetails_4
                if (Seedetails4_) {
                    if (Seedetails4_ === "Yes") {
                        console.log(`Here are your Details:`);
                        console.log(KhalasDetails);
                    }
                    else if (Seedetails4_ === "No") {
                        console.log(`Ok, dont see your details.`);
                    }
                }
            }
        }
    }
}

