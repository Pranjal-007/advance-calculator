let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let result = document.querySelector('.result');
let result1 = document.querySelector('.result1');

document.querySelector('.celcius').addEventListener('click',function(){
    let value = Number(firstNumber.value) * 33.8;
    if(value < 20){
        document.querySelector('.result').textContent = `OMG!! It's too Cold Outside ${value} celcius`;
        document.querySelector('.result').style.backgroundColor = '#4deeea';
    }
    else{
        document.querySelector('.result').textContent = `OMG!! It's Quite Hot Outside ${value} Celcius`; 
    }
})
document.querySelector('.farenheit').addEventListener
('click',function(){
    let value1= Number(secondNumber.value) - 32 * 0.5555;
    document.querySelector('.result1').textContent = `Your farenheit value is ${value1}`;
    })
