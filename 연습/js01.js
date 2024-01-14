function internalFn(){
    alert(`와우!! 버튼을 누르셨군요!! `);
}

function externalFn(){
    alert(`external Function Called!`);
}




const body = document.querySelector("body") ;

function darkMode(){
    body.style.color = "white" ;
    body.style.backgroundColor = "black" ;
}

function lightMode(){
    body.style.color = "black" ;
    body.style.backgroundColor = "white" ;
}