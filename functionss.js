//SYNTAX
// function functionanme(parameter){
//     body
// }
//defining function
function say(mess)
{
    console.log(mess);
}
//calling function
say("hello ");

//return a value
function sum(a,b)
{
    return a+b;
}

s=sum(2,3);
console.log(s);

//argument object
function add(a=10)
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i];
    }
    return sum;
}

console.log(add(1,2,3,4));


//function hoisting

fun()

function fun(){
    console.log("hello");
}

// storing function into variables

function sub(a,b)
{
    return a-b;
}
let su=sub;
// ways of calling
//1.
console.log(su(10,2));
console.log(sub(10,2));


//anonymous function

// SYNTAX
// (function(){
        //......
// });

let show=function(){
    console.log("hei");
};

show();

//invoking function immediately
(function(){
    console.log("hello");
})();

//passing arguments into anonymous function
let a=10,b=20;
let asw=(function(){
    return a+b;
})(a,b);

console.log(asw);



