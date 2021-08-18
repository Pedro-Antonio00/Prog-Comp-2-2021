function cal(){
    let n1 = Number(document.getElementById("n1").value)

    if(n1<500){
        document.getElementById("result").innerHTML = `O salário foi reajustado para R$${n1*0.30+n1}`
    }
    else{
        document.getElementById("result").innerHTML = `Seu salário não foi reajustado pois excede o valor.`
    }
}