var userdetails = /** @class */ (function () {
    function userdetails(Name, Age, PhoneNumber) {
        this.autoincrementId = 1000;
        this.autoincrementId++;
        this.name = Name;
        this.age = Age;
        this.phoneNumber = PhoneNumber;
        this.userId = "ID" + this.autoincrementId.toString();
    }
    return userdetails;
}());
var coursedetails = /** @class */ (function () {
    function coursedetails(cName, cDays) {
        this.autoincrementcourseid = 100;
        this.autoincrementcourseid++;
        this.coursename = cName;
        this.daysrequired = cDays;
        this.courseId = "SS" + this.autoincrementcourseid.toString;
    }
    return coursedetails;
}());
var userlist = new Array();
var courselist = new Array();
function newuser() {
    document.getElementById("home").style.display = "none";
    document.getElementById("userdetails").style.display = "block";
}
function validation() {
    var name = document.getElementById("name").value;
    var age1 = parseInt(document.getElementById("age").value);
    var number = parseInt(document.getElementById("num").value);
    var users = new userdetails(name, age1, number);
    if ((name != "") && (age1 != null) && (number != null)) {
        userlist.push(new userdetails(name, age1, number));
        alert("your id is " + users.userId);
    }
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function login() {
    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "block";
}
function available() {
    var cname = document.getElementById("course1").value;
    var days = document.getElementById("days").value;
    courselist.push(new coursedetails(cname, +days));
    document.getElementById("option").style.display = "none";
    document.getElementById("availblecourse").style.display = "block";
}
function course() {
    var userid = document.getElementById("id").value;
    var count = 0;
    for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].userId == userid) {
            alert("found");
            count = 0;
            document.getElementById("login").style.display = "none";
            document.getElementById("option").style.display = "block";
        }
        count++;
    }
    if (count > userlist.length) {
        alert("not valid");
    }
}
function enrolled() {
    var alldetails = document.getElementById("details");
    for (var detail in userdetails) {
        var details = document.getElementById("details");
    }
    document.getElementById("option").style.display = "none";
    document.getElementById("enrolledcourse").style.display = "block";
}
function home() {
    document.getElementById("availblecourse").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("enrolledcourse").style.display = "none";
}
