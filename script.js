console.log("Hello, World!");

age=30;
percentage=30.5;  // in javascript only one data type called number is used for both integers and floating-point numbers
fullName="John Doe";
isStudent=true;

p=null;
bigint=9007199254740991n;  // BigInt is used for very large integers

var x=10;
var x=30;
var x=50;  // var allows redeclaration of the same variable

//to declare a variable in javascript => var, let and const keywords. The difference between them is that var is function scoped, let and const are block scoped. const is used to declare a constant variable whose value cannot be changed. let is used to declare a variable that can be reassigned. var is generally not recommended for use in modern JavaScript due to its function scope and potential for bugs.

console.log(age);
console.log(percentage);
console.log(fullName);
console.log(isStudent);
console.log(p);
console.log(bigint);
console.log(x);


//let y=30; this will throw an error because y is already declared as a constant variable.

let z=10;
z=20;  // this is allowed because z is declared with let, which allows reassignment.
console.log(z);



const y=10;
//const y=20; const z=10; this will throw an error because y is already declared as a constant variable and cannot be redeclared or reassigned. 
console.log(y);
console.log(z);

let a=10;
let b=20;
console.log(a&&b);  // logical AND operator, returns true if both operands are true
console.log(a||b);  // logical OR operator, returns true if at least one operand is true    
console.log(!a);  // logical NOT operator, returns true if the operand is false 
console.log(a==b);  // equality operator, returns true if both operands are equal
console.log(a!=b);  // inequality operator, returns true if both operands are not equal 
console.log(a===b);  // strict equality operator, returns true if both operands are equal and of the same type
console.log(a!==b);  // strict inequality operator, returns true if both operands are not equal or not of the same type    
console.log(a^b);  // bitwise XOR operator, returns a number with bits set to 1 where the corresponding bits of either but not both operands are 1  

//creating of objects in javascript  **********************************************************
console.log("Using Object literal syntax to create an object");
let obj={ // object literal syntax
    name:"John Doe",
    age:20, 
    isAlive:true,
    college:"XYZ University",
};
console.log(obj);
console.log(obj["name"]);
console.log(obj.age);
obj.name="Jane Doe";  // changing the value of the name property
console.log(obj);
obj.grade="A";  // adding a new property to the object
console.log(obj);
delete obj.age;

console.log("Using Constructor syntax to create an object");
let details=new Object(); // object constructor syntax
details.name="John Doe";
details.age=20;
details.isAlive=true;
details.college="XYZ University";
console.log(details);
details["name"]="Jane Doe";  // changing the value of the name property
console.log(details);
details["grade"]="A";  // adding a new property to the object
console.log(details);
delete details["age"];
console.log(details);

console.log('madam' in obj);  // checks if the property 'madam' exists in the object obj, returns false
console.log(obj.hasOwnProperty('college'));  // checks if the object obj has the property 'name', returns true

for(let key in obj){  // for...in loop to iterate over the properties of the object obj
    console.log(key + ": " + obj[key]);  // prints the key and value of each property in the object
}

console.log(Object.keys(obj).length);   // returns the length of the keys of the object obj

let c=new Array(10,20,30,40,50);  // creating an array using the Array constructor syntax
console.log(c);
console.log(c[0]);

let movies=["veeram","Vedalam","Vivegam","Viswasam"];
console.log(movies[3]);

movies.push("GBU");
movies.push("Thunivu");
movies.push("Keeredam", "Mankatha", "Arambam", "Citizen", "Kandukonden Kandukonden", "Vaali", "Valimai"); 
movies.push("Vidamuyarchi", "Nerkonda Parvai", "Yennai Arindhaal", "Asal", "Billa "); 
movies.push("Dheena", "Red", "Villain", "Varalaru", "Aalwar", "kadhal Mannan", "Amarkalam", "Poovelam un Vaasam");
movies.unshift("Nee Varuvai Ena");
console.log(movies);
movies.pop();
console.log(movies);
movies.shift("Nee Varuvai Ena");
console.log(movies);

for(let i=0;i<movies.length;i++){
    console.log(movies[i]);
}   

let heros=new Array("Ajith","Vijay","Suriya","Karthi", "Mahesh Babu", "NTR", "Ram Charan", "Allu Arjun", "Prabhas", "Jr NTR");
let concateArray=movies.concat(heros);  // concatenating two arrays using the concat() method
console.log(concateArray);


let str1='Hello';
let str2="World";
let str3=new String('prasad');
let str4=`varsha`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

let str5="abc"+ "def";  // string concatenation using the + operator
console.log(str5);
let obj3={
    name:"Varsha",
    marks:90,
    college:"Kongu engineering college",
}
console.log("varsha marks in " + obj3.college + " is " + obj3["marks"]);  // string concatenation using the + operator
let ans=`varsha marks in ${obj3.college} is ${obj3.marks}`;  // string interpolation using template literals
console.log(ans);

/*let st="Ramu is good boy";
let name={st.slice(0,4)};  // string slicing using the slice() method
console.log(name);
let name1="ayesha";
let name2={st.substring(0,4)};  // string slicing using the substring() method
console.log(name2);*/

let r="sravan";
console.log(r.replace("s","S"));  // string replacement using the replace() method
//toUpperCase toLowerCase
let s="hello world";
console.log(s.toUpperCase());
console.log(s.toLowerCase());

let s1="  Srimathi ";
console.log(s1.trim());  // string trimming using the trim() method
console.log(s1.charAt(3));
console.log(s.concat(s1));


function myfun(){
    console.log("Hello world");
}
myfun();
function add(a,b){
    return a+b;
}
console.log(add(10,20));

let add1=function(a,b){  // function expression
    return a+b;
}
console.log(add1(10,20));  
function myfun1(name, age){
    console.log("My name is " + name + " and I am " + age + " years old.");
}
myfun1("Varsha", 20);


function sumthree(a,b,c){
    return a+b+c;
}
console.log(sumthree(10,20,30));
const arrowSum=(a,b)=>{
    return a+b;
}
let ans7=arrowSum(10,20);
console.log(ans7);

let arr9=[10,20,30,40,50];
arr9.forEach(function(element){  // using forEach() method to iterate over the elements of the array arr
    console.log(element);
});

let list=[10,20,30,40,50];
list.forEach(val=(a)=>{  // using forEach() method to iterate over the elements of the array list
    console.log(a);
}); 

//DOM document object model
const tag=document.getElementsByTagName("h1");
console.log(tag);
console.dir(tag);
tag[0].style.color="red";

const paragraph=document.getElementsByTagName("p");
console.log(paragraph);
console.dir(paragraph);
paragraph[0].style.color="blue";
paragraph[1].style.color="green";
paragraph[2].style.color="orange";
paragraph[3].style.color="purple";
paragraph[4].style.color="brown";

let btn=document.createElement('button');
btn.innerText='click here Varsha';
console.log(btn);
let div=document.querySelector('div');
div.append(btn);

let divs=document.querySelector('div');
divs.prepend(btn);  // prepend() method adds the button as the first child of the div element
let ele=document.querySelector('p');
ele.before(btn);  // before() method adds the button before the p element
let ele1=document.querySelector('p');
ele1.after(btn);  // after() method adds the button after the p element

//adding element
//remove the node
//let del=document.querySelector('p');
//del.remove();  // remove() method removes the p element from the DOM  

let head=document.createElement('h2');
head.innerText='This is a heading';
document.querySelector('body').prepend(head);  // prepend() method adds the heading as the first child of the body element      
document.querySelector('body').append(head);  // append() method adds the heading as the last child of the body element

// let del=document.querySelector('p');
// del.remove(); // remove() method removes the p element from the DOM

let idsel=document.querySelector('#head');
console.log(idsel);

function changeColor(){
    console.log("Button clicked");
    let a3=25;
    a3++;
    console.log(a3);
}
// let btn1=document.querySelector('#btn');
// btn1.onclick=changeColor();

const handler2=()=>{
    console.log('clicked 2');
}

//synchronous and asynchronous 
// synchronous javascript  allows 

setTimeout(()=>{
    console.log('hello times out');
},3000);




















































































































































