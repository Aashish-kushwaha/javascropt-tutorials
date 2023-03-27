// variable

let message="hello world";
console.log(message);


//data type
//null
let v=null;
console.log(typeof v); //the type of null is object , because of bug in javascript

//number
let num1=20;
let num2=23.33;
console.log(typeof num1);
console.log(typeof num2);
//range of number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/* NaN:it has two properties
-> any operation on NaN returns NaN
-> the NaN does not equal any value, including itself
*/
console.log(NaN/2);
console.log(NaN==NaN);


//string 
let m="hi";
let g="bye";
console.log(m+g);
m[0]='H';       //string are immutable
console.log(m);
console.log(typeof m);

//boolean
let t=true;
let f=false;
console.log(typeof t);
if(t==f)
{
    console.log("you are funny");
}


//symbol
let s1=Symbol();
let s2=Symbol();
console.log(s1);
console.log(typeof s1);
console.log(s1==s2);
let s3=Symbol('sett');      //named symbol
let s4=Symbol('sett');
console.log(s3==s4);


//bigint
let pv=2345n;
let p1=23456765432345676543n;
console.log(typeof pv);
console.log(typeof p1);

//object type
let e={};
let person={
    firstname:"john",
    lastname:"doe"
};
console.log(e);
console.log(person);

let contact={
    firstname:'john',
    lastname:'doe',
    email:'jdhf@gmail.com',
    phone:'1345',
    address:{
        building:'3',
        street:'2fnv',
    }
}

console.log(contact);
console.log(contact.email);
console.log(contact['email']);

console.log(contact.address);
console.log(contact['address']);
console.log(contact.address.building);
console.log(contact['address']['building'])
