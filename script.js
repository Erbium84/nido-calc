//wall of declarations of nodes

let ac=document.querySelector(".ac");
let back=document.querySelector(".back");
let exp=document.querySelector(".exp");
let mod=document.querySelector(".mod");

let nine=document.querySelector(".nine");
let eight=document.querySelector(".eight");
let seven=document.querySelector(".seven");
let add=document.querySelector(".add");

let six=document.querySelector(".six");
let five=document.querySelector(".five");
let four=document.querySelector(".four");
let sub=document.querySelector(".sub");

let three=document.querySelector(".three");
let two=document.querySelector(".two");
let one=document.querySelector(".one");
let mul=document.querySelector(".mul");

let zero=document.querySelector(".zero");
let calc=document.querySelector(".calc");
let div=document.querySelector(".div");

let screen=document.querySelector(".screen");


let p={
    num: "0"
};

let q={
    num: "0"
};

let occur={
    val: false
};

let operator={
    opt: "+"
}



//adding event listeners





nine.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='9';}
        else{ p.num+='9';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0"){ q.num="9";}
        else{ q.num+='9';}
        screen.textContent=q.num;
    }
    
});

eight.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='8';}
        else{ p.num+='8';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="8";
        else q.num+='8';
        screen.textContent=q.num;
    }
    
});
seven.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='7';}
        else{ p.num+='7';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="7";
        else q.num+='7';
        screen.textContent=q.num;
    }
});


six.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='6';}
        else{ p.num+='6';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="6";
        else q.num+='6';
        screen.textContent=q.num;
    }
});
five.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='5';}
        else{ p.num+='5';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="5";
        else q.num+='5';
        screen.textContent=q.num;
    }
});
four.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='4';}
        else{ p.num+='4';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="4";
        else q.num+='4';
        screen.textContent=q.num;
    }
});


three.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='3';}
        else{ p.num+='3';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="3";
        else q.num+='3';
        screen.textContent=q.num;
    }
});
two.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='2';}
        else{ p.num+='2';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="2";
        else q.num+='2';
        screen.textContent=q.num;
    }
});
one.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='1';}
        else{ p.num+='1';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="1";
        else q.num+='1';
        screen.textContent=q.num;
    }
});

zero.addEventListener("click",()=>{
    if(occur.val==false){
        if(screen.textContent=="0"){ p.num='0';}
        else{ p.num+='0';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="0";
        else q.num+='0';
        screen.textContent=q.num;
    }
});

//operations

add.addEventListener("click",()=>{
    operator.opt="+";
    occur.val=true;
    screen.textContent="0";
    
});

sub.addEventListener("click",()=>{
    operator.opt="-";
    occur.val=true;
    screen.textContent="0";
    
});


mul.addEventListener("click",()=>{
    operator.opt="*";
    occur.val=true;
    screen.textContent="0";
    
});

function expp(x,y){
    let ans=1;
    while(y--){
        ans*=x;
    }
    return ans;
}


calc.addEventListener("click",()=>{
    let x=Number(p.num);
    let y=Number(q.num);
    let result;

    if(operator.opt=='+') result = x + y;
    else if(operator.opt=='-') result = x - y;
    else if(operator.opt=='*') result = x * y;
    else if(operator.opt=='/') result = x / y;
    else if(operator.opt=='^') result = expp(x, y);
    else if(operator.opt=='%') result = x % y;

    screen.textContent = String(result);

    // Reset
    p.num = String(result);
    q.num = "0";
    occur.val = false;


});


div.addEventListener("click",()=>{
    operator.opt="/";
    occur.val=true;
    screen.textContent="0";
});

ac.addEventListener("click",()=>{
    //ac
    screen.textContent="0";
    p.num="0";
    q.num="0";
});

back.addEventListener("click",()=>{
    if(screen.textContent.length==1){
        screen.textContent="0";
        if(occur.val==false) p.num="0";
        else q.num="0";
    } 

    else{
        screen.textContent=screen.textContent.substring(0, screen.textContent.length-1);
        if(occur.val==false) p.num=p.num.substring(0, p.num.length-1);
        else q.num=q.num.substring(0, q.num.length-1);
    }
});

exp.addEventListener("click",()=>{
    operator.opt="^";
    occur.val=true;
    screen.textContent="0";
});

mod.addEventListener("click",()=>{
    operator.opt="%";
    occur.val=true;
    screen.textContent="0";
    
});


document.addEventListener('keydown', function(e){

    // const keysToPrevent = ['Backspace', 'Enter', '+', '-', '*', '/', '^', '%'];
    // if (keysToPrevent.includes(e.key)) {
    //     e.preventDefault();
    // }


    if(e.key==='9'){
        if(occur.val==false){
            if(screen.textContent=="0"){ p.num='9';}
            else{ p.num+='9';}
            screen.textContent=p.num;
        }
        else{
            if(screen.textContent=="0"){ q.num="9";}
            else{ q.num+='9';}
            screen.textContent=q.num;
        }
    }
    else if(e.key==='8'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='8';}
        else{ p.num+='8';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="8";
        else q.num+='8';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='7'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='7';}
        else{ p.num+='7';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="7";
        else q.num+='7';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='6'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='6';}
        else{ p.num+='6';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="6";
        else q.num+='6';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='5'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='5';}
        else{ p.num+='5';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="5";
        else q.num+='5';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='4'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='4';}
        else{ p.num+='4';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="4";
        else q.num+='4';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='3'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='3';}
        else{ p.num+='3';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="3";
        else q.num+='3';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='2'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='2';}
        else{ p.num+='2';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="2";
        else q.num+='2';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='1'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='1';}
        else{ p.num+='1';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="1";
        else q.num+='1';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='0'){
        if(occur.val==false){
        if(screen.textContent=="0"){ p.num='0';}
        else{ p.num+='0';}
        screen.textContent=p.num;
    }
    else{
        if(screen.textContent=="0") q.num="0";
        else q.num+='0';
        screen.textContent=q.num;
    }
    }
    else if(e.key==='+'){
        operator.opt="+";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='-'){
        operator.opt="-";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='*'){
        operator.opt="*";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='/'){
        operator.opt="/";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='Backspace'||e.shiftKey===13){
        if(screen.textContent.length==1){
        screen.textContent="0";
        if(occur.val==false) p.num="0";
        else q.num="0";
    } 

    else{
        screen.textContent=screen.textContent.substring(0, screen.textContent.length-1);
        if(occur.val==false) p.num=p.num.substring(0, p.num.length-1);
        else q.num=q.num.substring(0, q.num.length-1);
    }
    }
    else if(e.key==='^'){
        operator.opt="^";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='%'){
        operator.opt="%";
    occur.val=true;
    screen.textContent="0";
    }
    else if(e.key==='Enter'){
        let x=Number(p.num);
        let y=Number(q.num);

        if(operator.opt=='+'){
            screen.textContent=String(x+y);
        }
        else if(operator.opt=='-'){
            screen.textContent=String(x-y);
        }

        else if(operator.opt=='*'){
            screen.textContent=String(x*y);
        }
        else if(operator.opt=='/'){
            screen.textContent=String(x/y);
        }
        else if(operator.opt=='^'){
            screen.textContent=String(expp(x,y));
        }
        else if(operator.opt=='%'){
            screen.textContent=String(x%y);
        }
    }
    else if(e.key==='c'||e.key==='C'){
        //ac
        screen.textContent="0";
        p.num="0";
        q.num="0";
    }
});