/* JavaScript */
function organizar(){ // usamos function para organizar
    //recuperar o peso digitado pelo usuário
    //document -> representa o documento html
    //getElementId("peso") -> recupera a caixa de texto
    //.value -> recupera o valor dentro da caixa
    //let peso -> declarando uma variavel que guarda o peso
    let peso = document.getElementById("peso").value
    //recuperar a altura
    let altura = document.getElementById("altura").value
    //calcular e mostrar o imc
    //comando de "igual" é de atribuição
    // quando a viável passa por divisão ou multiplicação, o dado é convertido auto em número
    let imc = (peso / (altura * altura)).toFixed(2)
    alert(`O valor do imc é de ${imc}`)// modo novo
}
