const cv1 = document.getElementById("compareValue1") ;

const cv2 = document.getElementById("compareValue2") ;

const result1 = document.getElementById("result1")

function compareFn(){
    const value1 = Number(cv1. value);
    const value2 = Number(cv2.value) ;

    result1.innerText = (value1 == value2);
}


//위의 수가 아래 수보다 큰지 확인

const upValue = document.getElementById("compareValue3");

const downValue = document.getElementById("compareValue4");

const result2 = document.getElementById("result2");

function compareFn2(){
    v1 = Number(upValue.value) ;
    v2 = Number(downValue.value);

    result2.innerText = (v1 > v2);
}

const n01 = document.getElementById("input01")
const n02 = document.getElementById("input02")

const modResult = document.getElementById("modResult")

function modCheckFn(){
    const n1 = Number(n01.value);
    const n2 = Number(n02.value) ;

    modResult.innerText = `${n1}은/는 ${n2}의 배수 : ${n1 % n2 == 0} 아니라면 나머지는 ${n1 % n2}`;
}

const identity = document.getElementById("inputId") ;
const password = document.getElementById("inputPw") ;

function login(){
    const id = identity.value
    const pw = password.value ;

    const success = "로그인 성공"
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다."

    const message =
    (id == 'member01') && (pw == 'pass01!') ? success : fail ;

    alert(message);
}