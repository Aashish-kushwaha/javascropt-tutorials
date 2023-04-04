//type 1
const person={
    firstname:'ashu',
    lastname:'ksuh',
    age:10,
};

console.log(person);


//type 2
const person2={};
person2.name="aasish";
person2.age=45;

console.log(person2);

//type 3
const person3=new Object();
person3.name='aashsish';
person3.age=90;

console.log(person3);


//javaScript objects are mutable

const x=person2;
x.age=34;
console.log(x);
console.log(person2)


//accessing object property
console.log(person2.age);
console.log(person2['age']);
let s='age'
console.log(person2[s]);


//for loop on objects
for(let va in person)
{
    console.log(va,person[va]);
}


//adding new property
person.nation="india";
console.log(person);

//delete object property
delete person.age;
console.group(person);

//nested objects
myobj={
    name:'john',
    age:30,
    cars:{
        car1:'ford',
        car2:'BMW',
        car3:'fiat',
    },
}
console.log(myobj)

//accessing objects property ki property
console.log(myobj.cars.car1);
console.log(myobj.cars['car1']);
console.log(myobj['cars']['car1']);
console.log(myobj["cars"].car1);