function mp(){
    //entrada de dados 
    let nota1 = Number(document.getElementById("nota1").value)

    let nota2 
    nota2 = Number(document.getElementById("nota2").value)
    //processamento
    let soma 
    soma = ((nota1*2)+(nota2*3))/5
    //saida de dados
    //innerHTML permite colocar conteúdo dentro do elemento
    //se a função é chamada por uma variavel, o nome começa com letra minuscula
    document.getElementById("resultado").innerHTML = soma.toFixed(2)
}