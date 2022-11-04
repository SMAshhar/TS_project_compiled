/*This project is a simple console based Student Management System. In this project you 
will be learning how to add new students, how to generate a 5 digit unique studentID for 
each student, how to enroll students in the given courses. Also, you will be implementing
 the following operations enroll, view balance, pay tuition fees, show status, etc. The 
 status will show all the details of the student including name, id, courses enrolled and 
 balance.This is one of the best projects to implement the Object Oriented Programming 
 concepts.
 */

// Stating our currencies  
var nextRoll: string = "000000"        // First roll no.

var tuitionFee: number = 2000        // Defining a fixed tuition fee

class Student {                     // Defining class for object students
    name: string;
    id: string;
    courses: string[];
    balance: number;

    constructor(name: string, id: string, courses: string[], balance: number) {
        this.name = name;
        this.id = id;
        this.courses = courses;
        this.balance = balance;
    }

    viewBalance(): void {
        console.log("Your current balance is : " + this.balance)
    }
    payTuition(): void {
        this.balance -= tuitionFee;
        console.log("Tuition fee paid. Your remaining balance is : " + this.balance)
    }
    status(): void {
        console.log(`Name: ${this.name} \tId Number: ${this.id} \nCourses enrolled: ${this.courses}\nCurrent Balance: ${this.balance}`)
    }
}

// Making object of students

var studentsList = {
    ...
}

// Making function to enroll a new student.

function enroll(name: string, courses: string[], balance: number) {
    nextRoll = String(Number(nextRoll) + 1);
    var thisRollNo = "PIAIC" + nextRoll.padStart(6, "0");
    var student = new Student(name, thisRollNo, courses, balance);
    studentsList[student.id] = student
    console.log(`Your ID is ${thisRollNo}`)
    return student;
}

// Making function to take data for new students

function dataTaking() {
    var name = String(prompt("Enter name : "))
    var courses = String(prompt("Enter your courses seprated buy ',' ")).split(",")
    var balance = Number(prompt("Enter your balance : "))
    return [name, courses, balance]
}

// Takes input, enroll new student. Give choices of paying fee etc

while (true) {
    var choice = String(prompt(`Would you like to: \n1. Check info on existing student\n2. Enroll new student. \n (Enter 1 or 2): `))
    if (choice == "2") {                                                // Enrolling new students
        console.log("Taking you to choice 2")
        var data = dataTaking()
        var student = enroll(data[0], data[1], data[2])
        console.log("Enrollment complete")
    } else if (choice == "1") {                                         // Accessing data of enrolled students
        console.log("Taking you to choice 1")
        var rollNo = String(prompt("Enter student ID please: "))

        if (rollNo in studentsList) {
            var ourPal = studentsList[rollNo]
            console.log(`You are logged in as ${ourPal.name}`)
            while (true) {                                              // This loop will only break when specifically asked to
                var selection = String(prompt("Please select:\na, Student's status\nb, Pay tuition\nc, View Balance\nd, to exit"))
                if (selection === 'd') {
                    break
                }
                switch (selection) {
                    case `a`:
                        ourPal.status()
                        break
                    case `b`:
                        ourPal.payTuition()
                        break
                    case `c`:
                        ourPal.viewBalance()
                        break
                    default:
                        console.log("Please enter a valid selection.")
                        break
                }

            }

        } else {
            console.log("This roll number is not registered. Please try again.")
        }

    } else {
        console.log("See you next time.")
        break
    }
}