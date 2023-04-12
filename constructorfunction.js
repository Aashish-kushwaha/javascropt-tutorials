//constructor function

//defining constructor function
function Person(fn,ln)
{
    this.firstname=fn;
    this.lastname=ln;
}

// calling constructor function :it is always called using new keyword
let person =new Person('aasjsdj','dfbf');
console.log(person);


// adding methods to constructor function
function Person13(f,l)
{
    this.first=f;
    this.last=l;

    this.getfullname=function(){
        return this.first+' '+ this.last;
    };

}

let p=new Person13("shf","sjdj");
console.log(p);
console.log(p.getfullname());
console.log(p.first);

//if we call constructor function without new keyword it will executes as regular function but if we try to access the property inside function it give error
// to avoid thi ES6  introduced the new.target property:If a constructor function is called with the new keyword, the new.target returns a reference of the function. Otherwise, it returns undefined

function People(f1,l1){
 if(!new.target)
 {
    console.log("error can not be called without new keyword");
     
    }
    this.first=f1;
    this.last=l1;

}

let q= new People('sdhd','sjd');
console.log(q);