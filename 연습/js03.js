const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

// getElementById : id가 있는 속성에 접근하고자 할 때
// document.querySelector : id가 없는 속성에 접근하고자 할 때


function plusFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 + value2 ;
}
function minusFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 - value2 ;
}
function multiFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 * value2 ;
}
function divFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 / value2 ;
}
function modFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 % value2 ;
}


const value1 = document.getElementById("num1") ;
const value2 = document.getElementById("num2") ;
const value3 = document.getElementById("num3") ;
const total = document.getElementById("total") ;

function plusFn2(){
    const value1=Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);

    total.innerText = value1 + value2 + value3
}