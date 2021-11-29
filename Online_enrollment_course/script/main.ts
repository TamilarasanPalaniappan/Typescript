
class userdetails
{
    autoincrementId:number=1000;
    name:string;
    age:number;
    phoneNumber:number;
    userId:string;

    constructor(Name:string,Age:number,PhoneNumber:number)
    {
        this.autoincrementId++;
        this.name=Name;
        this.age=Age;
        this.phoneNumber=PhoneNumber;
        this.userId= "ID"+this.autoincrementId.toString();
    }
}
class coursedetails
{
    coursename:string;
    daysrequired:number;
    autoincrementcourseid=100;
    courseId:string;
    constructor(cName:string,cDays:number)
    {
        this.autoincrementcourseid++;
        this.coursename=cName;
        this.daysrequired=cDays;
        this.courseId="SS"+this.autoincrementcourseid.toString;
    }
}
let userlist:Array<userdetails>=new Array<userdetails>();
let courselist:Array<coursedetails>=new Array<coursedetails>();

function newuser()
{ 
    (document.getElementById("home") as HTMLDivElement).style.display="none";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="block";  
}
function validation()
{
    let name=(document.getElementById("name")  as HTMLInputElement).value;
    let age1=parseInt((document.getElementById("age")  as HTMLInputElement).value);
    let number=parseInt((document.getElementById("num")  as HTMLInputElement).value);
    let users= new userdetails(name,age1,number);
        if((name!="")&&(age1!=null)&&(number!=null))
        {
        userlist.push(new userdetails(name,age1,number));
        alert("your id is "+users.userId);
        }     
    (document.getElementById("userdetails") as HTMLDivElement).style.display="none";
    (document.getElementById("home") as HTMLDivElement).style.display="block";    
}
function login()
{
    (document.getElementById("home") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display="block";
    }
function available()
{
     let cname=(document.getElementById("course1") as HTMLInputElement).value;
     let days=(document.getElementById("days") as HTMLInputElement).value;
     courselist.push( new coursedetails(cname,+days));
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("availblecourse") as HTMLDivElement).style.display="block";
}
function course()
{
    let userid=(document.getElementById("id") as HTMLInputElement).value;
    let count=0;
    for (let i = 0; i < userlist.length; i++)
     {
        if (userlist[i].userId == userid)
         {      
         alert("found");
         count=0;  
        (document.getElementById("login") as HTMLDivElement).style.display="none";
        (document.getElementById("option") as HTMLDivElement).style.display="block";
        }
        count++;
    }
    if (count>userlist.length)
    {
        alert("not valid");
    }
}
function enrolled()
{
    let alldetails=document.getElementById("details") as HTMLLabelElement;
    for( let detail in userdetails)
    {
        let details=document.getElementById("details") as HTMLLabelElement; 
    }
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("enrolledcourse") as HTMLDivElement).style.display="block";    
}
function home()
{
    (document.getElementById("availblecourse") as HTMLDivElement).style.display="none";
    (document.getElementById("home") as HTMLDivElement).style.display="block";
    (document.getElementById("enrolledcourse") as HTMLDivElement).style.display="none";
}
   