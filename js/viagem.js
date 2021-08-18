/* JavaScript */
function calcular(){
    // number() converte texto em número
    let pedagio1 = Number(document.getElementById("pedagio1").value)
    let pedagio2 = Number(document.getElementById("pedagio2").value)
    let combustivel = Number(document.getElementById("combustivel").value)
    let viagem = pedagio1 + pedagio2 + combustivel
    alert(`O custo da viagem foi R$ ${viagem}`)
}