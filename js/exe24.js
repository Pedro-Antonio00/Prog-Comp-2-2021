function cal(){
    let valor = Number(document.getElementById("valor").value)
    let cat = document.getElementById("categoria").value
    let si = document.getElementById("situacao").value
    let total
    let imp
    let situacao
    
    switch(cat){
        case 'l':
            if(valor<=25){
                total = (valor*5)/100
            }
            else{
                total = (valor*12)/100
            }
            break
    
        case 'a':
            if(valor<=25){
                total = (valor*8)/100
            }
            else{
                total = (valor*15)/100
            }
            imp = (valor*5)/100
            break

        case 'v':
            if(valor<=25){
                total = (valor*10)/100
            }
            else{
                total = (valor*18)/100
            }
            break    
    }
    switch(si){
        case 'r':
            imp = (valor*5)/100
            break
        case 'n':
            if(cat == 'a'){
                imp = (valor*5)/100
            }
            else{
                imp = (valor*8)/100
            }
            break
    }
    if(valor+total<=50){
        cat = "Barato"
    }
    else if(valor+total>50 && valor+total<120){
        cat = "Normal"
    }
    else{
        cat = "Caro"
    }
    if(valor>0){
        document.getElementById("result").innerHTML = `Valor do Aumento R$${(total).toFixed(2)} - Valor do Imposto R$${(imp).toFixed(2)} - Novo Preço R$${(valor+total).toFixed(2)} - ${cat}`
    }
    else{
        document.getElementById("result").innerHTML = "Erro! Tente Novamente"
    }
       
}