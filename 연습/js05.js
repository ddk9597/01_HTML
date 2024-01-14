/* if문을 이용하여 양수인지 검사하기 */

const patient = document.getElementById("input")

function check1(){
    const n1 = Number(patient.value) ;

    if(n1 > 0 ){
        alert(`${n1}은 양수입니다.`)
    }

    else if(n1 == 0){
        alert(`${n1}은 0 입니다.`)
    }

    else{alert(`${n1}은 음수입니다.`)}
}



function check03(){
    const randomNumber = Math.floor(Math.random()*101);
    
    if (randomNumber % 2 == 0) {
        alert (`${randomNumber}는 짝수입니다.`);
    }

    else {
        alert (`${randomNumber}는 홀수입니다.`);
    }
}

/* 나이 구분하기 */
const inputAge = document.getElementById("inputAge")

function check04(){
    const age=Number(inputAge.value) ;
    
    if (inputAge.value.length == 0) {
        alert(" null. input your age.") ;
    }

    else{

        if (age >=0 && age <= 13){
            alert( "child.") ;
        }

        else if (age < 0 ||  age > 150){
            alert("wrong input") ;
        }

        else if (age >= 14 && age<=19){
            alert ("teenager") ;
        }

        else{
            alert ("adult") ;
        }

    }
}

/* 계산기 만들기 */

const number01 = document.getElementById("firstNumber") ;
const number02 = document.getElementById("secondNumber") ;

function calc(op){

    const v1 = Number(number01.value);
    const v2 = Number(number02.value);

    let result;

    switch(op){
        case '+' : result = v1 + v2 ; break;
        case '-' : result = v1 - v2 ; break;
        case '*' : result = v1 * v2 ; break;
        case '/' : result = v1 / v2 ; break;
        case '%' : result = v1 % v2 ; break;

        default : result = "잘못된 연산자" ; break;
    }
    
    calcResult.innerText = result ;
}