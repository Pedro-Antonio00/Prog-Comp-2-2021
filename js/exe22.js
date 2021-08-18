function cal(){
    let peso = Number(document.getElementById("peso").value)
    let idade = Number(document.getElementById("idade").value)

    if(idade < 20 && peso <= 60){
        document.getElementById("result").innerHTML = `Grupo - 9 - Risco Baixo`
    }
    else if(idade < 20 && peso > 60 && peso <= 90){
        document.getElementById("result").innerHTML = `Grupo - 8 - Risco Baixo`
    }
    else if(idade < 20 && peso > 90){
        document.getElementById("result").innerHTML = `Grupo - 7 - Risco Baixo`
    }
    else if(idade >= 20 && idade <= 50 && peso <= 60){
        document.getElementById("result").innerHTML = `Grupo - 6 - Risco Baixo`
    }
    else if(idade >= 20 && idade <= 50 && peso > 60 && peso <= 90){
        document.getElementById("result").innerHTML = `Grupo - 5 - Risco Intermediário`
    }
    else if(idade >= 20 && idade <= 50 && peso > 90){
        document.getElementById("result").innerHTML = `Grupo - 4 - Risco Intermediário`
    }
    else if(idade > 50 && peso <= 60){
        document.getElementById("result").innerHTML = `Grupo - 3 - Risco Alto`
    }
    else if(idade > 50 && peso > 60 && peso <= 90){
        document.getElementById("result").innerHTML = `Grupo - 2 - Risco Alto`
    }
    else if(idade > 50 && peso > 90){
        document.getElementById("result").innerHTML = `Grupo - 1 - Risco Alto`
    }
}