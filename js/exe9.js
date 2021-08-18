function cal(){
    let n1 = Number(document.getElementById("val").value)
    let c30 = n1*0.30
    let c25 = n1*0.25
    let c20 = n1*0.20
    let c10 = n1*0.10

    if(n1>400){
        document.getElementById("result").innerHTML = `O Saldo Médio é R$${n1} e o Crédito Especial é R$${c30}`
    }
    else if((n1>300) && (n1<=400)){
        document.getElementById("result").innerHTML = `O Saldo Médio é R$${n1} e o Crédito Especial é R$${c25}`
    }
    else if((n1>200) && (n1<=300)){
        document.getElementById("result").innerHTML = `O Saldo Médio é R$${n1} e o Crédito Especial é R$${c20}`
    }
    else if(n1<=200){
        document.getElementById("result").innerHTML = `O Saldo Médio é R$${n1} e o Crédito Especial é R$${c10}`
    }
}