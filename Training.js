// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line (don't forget to put the str in the parentheses).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// function helloWorld(){
//  var str = "Hello World!"
//  console.log(str)
// }

// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// let v1 = 50,
//     v2 = 100,
//     v3 = 150,
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;

// function equal1(){
//   let a = v1,   
//       b = v1;   
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2(){
//   let a =  v4, //set number value to a
//       b =  v2; //set number value to b
//   return a - b;
// }

// function equal3(){
//   let a =  v1, //set number value to a
//       b =  v5; //set number value to b
//   return a * b;
// }

// function equal4(){
//   let a =  v4, //set number value to a
//       b =  v5; //set number value to b
//   return a / b;
// }

// function equal5(){
//   let a =  v2, //set number value to a
//       b =  v4; //set number value to b
//   return a % b;
// }

// In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

// String can use operators +, Connect two or more strings together.

// Task
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

// If everything is right, click "Submit" again to submit your code pass this kata.

// /var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   let father = d1+a2+d2
//   return father;
// }
// function Bee(){
//   let bug = b1+e2+e2
//   return bug;
// }
// function banana(){
//   let fruit = b2+a2+n2+a2+n2+a2
//   return fruit;
// }

// function answer1(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer2(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer3(){
//   //the answer should be "yes" or "no"
//   return "yes";
// }

// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// function getLength(arr){
  
//   return arr.length
// }
// function getFirst(arr){
  
//   return arr[0]
// }
// function getLast(arr){
  
//   return arr[arr.length - 1]
// }
// function pushElement(arr){
//   var el=1;
  
//   arr.push(el)
  
//   return arr
// }
// function popElement(arr){
 
//  arr.pop()
  
//   return arr
// }

// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

// function animal({name, legs, color}){
  
//   this.name = "dog"
//   this.legs = 4
//   this.color = "white"
  
//   return `This ${color} ${name} has ${legs} legs.`;
// }

// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// function trueOrFalse(val){
//   if(val == false || val == undefined || val == null){
//     return "false"
//   }else{
//     return "true"
//   }
// }

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

// function saleHotdogs(n){
//   if(n<5){
//     return n * 100
//   }else if(n>=5 && n<10){
//     return n * 95
//   }else if(n>=10){
//     return n * 90
//   }
// }

// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

// function howManydays(month){
//   var days;
//   switch (month){
//     case 1:
//       return 31
//       break;
//     case 2:
//       return 28
//       break;
//     case 3:
//       return 31
//       break;
//     case 4:
//       return 30
//       break;
//     case 5:
//       return 31
//       break;
//     case 6:
//       return 30
//       break;
//     case 7:
//       return 31
//       break;
//     case 8:
//       return 31
//       break;
//     case 9:
//       return 30
//       break;
//     case 10:
//       return 31
//       break;
//     case 11:
//       return 30
//       break;
//     case 12:
//       return 31
//       break;
//   }
//   return month;
// }