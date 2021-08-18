function cal(){
    // recupera os dados numéricos
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("opção").value)

    // calcula o resultado
    let resultado
    switch (op) {
        case 1:
            resultado = (n1+n2)/2
            break
        
        case 2:
            if(n1>n2){
                resultado = n1-n2
            }
            else{
                resultado = n2-n1
            }
            break
        case 3:
            resultado = n1*n2
            break
        
        case 4:
            resultado = n1/n2
            break
        default:
            break;
    }
    
    alert(resultado)
}