function recu(x)
{
    if(x==0)
    return ;

    console.log(x)
    recu(x-1);
}

let y=3;
recu(y);


function summ(n)
{
    if(n<=1)
    return n;

    return n+summ(n-1);
}

let g=10;
let s=summ(g);
console.log(s);

