function cal(){
    // recupera os dados numéricos
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("opção").value)

    // calcula o resultado
    let resultado
    if(op == 1){
        resultado = (n1+n2)/2
    }
    else if(op == 2){
        if(n1>n2){
            resultado = n1-n2
        }
        else{
            resultado = n2-n1
        }
    }
    else if(op == 3){
        resultado = n1+n2
    }
    else if(op == 4){
        // != significa diferente
        if(n2 != 0){
            resultado = n1/n2
        }
        else{
            resultado = "Invalido"
        }
    }
    alert(resultado)
}