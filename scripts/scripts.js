

// #1
let user = {
    firstname:"giorgi",
    lastname:"smith",
    age:25,
    studentstatus:"active"

};

console.log(user.studentstatus);


// #2

let names=["ana","mariami","nika", "giorgi", "nino"];

for (let a = 0; a < names.length; a++) {
    console.log(names[a]);
    
}

// #3
let numbers=[5,6,10,25,3,7,4,100,28,36,89];

for (let x = 0; x < numbers.length; x++) {
    if (x>5) {
        console.log(x);
    }
    
}

// #4

let users ={
    name:"giorgi",
    age: 20, 
    studentstatus:"active"
}

if(users.age<18 && users.studentstatus=="active"){
    console.log("hello");
}
else if(users.name=="levan"){
    console.log("hello levan");
}
else if(users.studentstatus=="active"||user.age<25)
{
console.log("hello world");
}
else{
    console.log("error");
}


// #5
let array=["watermelon", "pear", 10, 45, 50, "apple", "ananas"] ;
array=array.filter(item=>typeof item=="string");
console.log(array);

// #6

let array=[[2,-3,5,10],[25,-24,-11,100],[-6,-7,10]];

for (let item of array){
    for (item of item)
    if(item>0)
    console.log(item);
    }


// #7
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let item of array){
    if(item % 2 == 0)
    console.log(item);
}

let row = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let item of row){
    if(item % 2 == 0)
    console.log(item);
}

// #8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
    ]

 for(let item of users) {
    if(item.status==true)
    console.log(item);
 }