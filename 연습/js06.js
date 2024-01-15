function randomNumber(){
    const randomNumber = Math.floor(Math.random()*101)

    if (randomNumber % 2 == 0){
        alert (`${randomNumber}는 짝수입니다`)
    }

    else {
        alert (`${randomNumber}는 홀수입니다.`)
    }
}

// 나이별 그룹 구분하기

const inputAge = document.getElementById("inputAge")

function ageCheck(){
    const age = Number(inputAge.value);

    if(inputAge.value.length == 0)
    { alert ("입력하세요");}

    else{
        if (age >= 0 && age <=13){
            alert ( "어린이입니다.") ;
        }

        else if (age >= 14 && age < 20){
            alert ("청소년입니다.")
        }
        else if (age >= 20 && age <= 150){
            alert("성인입니다.");
        }
        else{
            alert("올바른 값을 입력하세요");
        }
    }
}

// 계산기 만들기

const n01 = document.getElementById("inputNumber01")
const n02 = document.getElementById("inputNumber02")
const calcResult = document.getElementById("calcResult")

function calc(op){
    const v1 = Number(n01.value);
    const v2 = Number(n02.value);
    
    let result;

    switch(op){

        case '+' : result = v1 + v2; break;
        case '-' : result = v1 - v2; break;
        case '*' : result = v1 * v2; break;
        case '/' : result = v1 / v2; break;
        case '%' : result = v1 % v2; break;

        default : result = "올바른 버튼이 아닙니다."; break;
        
    }
    calcResult.innerText = result;


}