//pass by value
function increase(x){
    x=x+1;
    console.log("inside function:",x);
}

let y=10;
increase(y);
console.log("outside function:",y);


//pass by reference

function decrease(x)
{
    x.age+=1;
    console.log("age inside function:",x.age)
}

let person={
    name:'ashu',
    age:10,
};

decrease(person);
console.log("age outside funtion:",person.age);
