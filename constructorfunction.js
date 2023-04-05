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
