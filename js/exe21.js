function verify(){
    let valor = Number(document.getElementById("valor").value)
    let cod = Number(document.getElementById("cod").value)
    let origem

    switch(true){
        case(cod == 1): origem = "Sul"
                break
        case(cod == 2): origem = "Norte"
                break
        case (cod == 3): origem = "Leste"
                break
        case(cod == 4): origem = "Oeste"
                break
        case(cod == 5 || cod == 6): origem = "Nordeste"
                break
        case(cod == 7 || cod == 8 || cod == 9): origem = "Sudeste"
                break
        case(cod >= 10 && cod <= 20): origem = "Centro-Oeste"
                break
        case(cod >= 21 && cod <= 30): origem = "Nordeste"
                break
        default: origem = "Invalido! Tente Novamete."
                break
    }
    document.getElementById("resultado").innerHTML = `Procedencia:${origem}`
}