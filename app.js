let ten = document.getElementById("ten")
let fifteen = document.getElementById("fifteen")
let twenty = document.getElementById("twenty")
let btn=document.getElementById("btn")
let result = document.getElementById("result")
function calculator() {
    let txt = document.getElementById("total").value;

    let number = parseFloat(txt)
if(ten.checked){
    let value = Math.round((((number/100)*10)*100)/100)
    result.innerHTML=value}
    if(fifteen.checked){
        let value = (number/100)*15
        result.innerHTML=value}
        if(twenty.checked){
            let value = (number/100)*20
            result.innerHTML=value
}
}
function increase (){
    btn.style.width="150px"
    btn.style.background="green"
}