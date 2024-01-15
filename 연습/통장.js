let balance = 10000 ;
const password = "1234" ;
const records = [] ;

function updateBalance() {
    document.getElementById("balance").innerText = balance + " 원" ;
}

function record(){
    const list = document.getElementById("record");
    list.innerText = "" ;
}

function deposit() {
    const amountInput = document.getElementById("inputAmount") ;
    const money = Number(amountInput.value) ;

    if (money > 0) {
        balance += money ;
        updateBalance() ;
        alert(`${money}원 입금되었습니다. 남은 잔액 : ${balance}원`) ;
    } else {
        alert("입금액을 올바르게 입력해주세요.") ;
    }
}

function checkPassword() {
    const enteredPassword = prompt('비밀번호를 확인하세요.') ;

    if (enteredPassword === null) {
        alert('취소') ;
    } else {
        if (enteredPassword === password) {
            withdraw() ;
        } else {
            alert("비밀번호가 일치하지 않습니다.") ;
        }
    }
}

function withdraw() {
    const amountInput = document.getElementById("inputAmount") ;
    const money = Number(amountInput.value) ;

    if (money > 0 && money <= balance) {
        balance -= money ;
        updateBalance() ;
        alert(`${money}원 출금되었습니다. 남은 잔액 : ${balance}원`) ;
    } else {
        alert("출금액이 유효하지 않거나 잔액이 부족합니다.") ;
    }
}