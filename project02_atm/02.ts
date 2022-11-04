var x = null

var data = {
    "Ashhar" : "Abc123",
    "Ali" : "yuio123oo",
    "Fasih" : "uio21o",
}


function userCheck() {
    while (true) {
        var userName:string = String(prompt("Please enter user name : "));
        var password:string = String(prompt("Please enter password : "));

        if (data[userName] === password) {
            alert("Login successful. All ATM functionalities are now available to you");
            break;
        } else {
            alert("User Name or password is wrong. Try again.");
        }
    }
}

userCheck()

export { userCheck }