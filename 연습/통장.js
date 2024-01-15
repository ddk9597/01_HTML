let balance = 10000 ;
const password = "1234" ;
const records = [] ;

function updateBalance() {
    const balance02 = document.getElementById("balance") ;
    balance02.innerText = balance.toLocaleString() + "원" ;
    
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
            withdrawl() ;
        } else {
            alert("비밀번호가 일치하지 않습니다.") ;
        }
    }
}

function withdrawl() {
    const amountInput = document.getElementById("inputAmount") ;
    const money = Number(amountInput.value) ;

    if (money > 0 && money <= balance) {
        balance -= money ;
        updateBalance() ;
        alert(`${money}원 출금되었습니다. 남은 잔액 : ${balance}원`) ;
    } else {
        alert("출금 금액이 잔액보다 클 수 없습니다.") ;
    }
}

 // 페이지 로드 시 초기화
 window.onload = function() {
    updateBalance();
};