function cal(){
    let cod = Number(document.getElementById("cod").value)
    let qnt = Number(document.getElementById("qnt").value)
    let preco

    if(cod >=1 && cod <= 10){
        cod = 10.0
    }
    else if(cod >= 11 && cod <=20){
        cod = 15.0
    }
    else if(cod >= 21 && cod <= 30){
        cod = 20.0
    }
    else if(cod >= 31 && cod <= 40){
        cod = 30.0
    }
    else{
        document.getElementById("result").innerHTML = `Invalido!`
    }
    preco = cod*qnt
    if(preco <= 250){
        document.getElementById("result").innerHTML = `Valor Unitário R$${cod} - Valor total da Nota R$${preco} - Valor do Desconto R$${preco*0.05} - Preço Final R$${preco-(preco*0.05)}`
    }
    else if(preco > 250 && preco < 500){
        document.getElementById("result").innerHTML = `Valor Unitário R$${cod} - Valor total da Nota R$${preco} - Valor do Desconto R$${preco*0.10} - Preço Final R$${preco-(preco*0.10)}`
    }
    else if(preco >= 500){
        document.getElementById("result").innerHTML = `Valor Unitário R$${cod} - Valor total da Nota R$${preco} - Valor do Desconto R$${preco*0.15} - Preço Final R$${preco-(preco*0.15)}`
    }
}