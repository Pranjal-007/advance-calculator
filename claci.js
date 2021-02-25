let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let result = document.querySelector('.result');


document.querySelector('.add').addEventListener('click',function(){
let add = Number(firstNumber.value) + Number(secondNumber.value);
document.querySelector('.result').textContent = `your answer is ${add}`;
if(add > 0){
document.querySelector('.result').style.backgroundColor = "#FFFF00";
}
})
document.querySelector('.sub').addEventListener('click',function(){
let sub = Number(firstNumber.value) - Number(secondNumber.value);
document.querySelector('.result').textContent = `your answer is ${sub}`;
if(sub == 0){
    document.querySelector('.result').textContent = 'your answer is 0';
document.querySelector(".result").style.backgroundColor = " #9ACD32";
}
})
document.querySelector('.mul').addEventListener('click',function(){
let mul = Number(firstNumber.value) * Number(secondNumber.value);
document.querySelector('.result').textContent = `your answer is ${mul}`;
if(mul == 0){
    document.querySelector('.result').textContent = 'Please insert some numbers man!!';
document.querySelector(".result").style.backgroundColor = "#ADFF2F";
}
})
document.querySelector('.div').addEventListener('click',function(){
let div = Number(firstNumber.value) / Number(secondNumber.value);
document.querySelector('.result').textContent = `your answer is ${div}`;
if(!div){
    document.querySelector('.result').textContent = 'Please insert some numbers man!!';
document.querySelector(".result").style.backgroundColor = " #008000";
}
})
document.querySelector('#reset').addEventListener('click' ,function(){
    document.querySelector('.result').textContent = "let's start with new calculation";
    document.querySelector(".result").style.backgroundColor = " #fffdd0";
})