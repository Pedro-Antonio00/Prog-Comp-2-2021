function exe0(){
    let soma = 0
    let i = 1

    while(i <= 10){
        let nota = Number(prompt(`Informe a nota`))

        soma = soma + nota

        i++
    }
    let media = soma/10
    alert(`A média das notas é ${media}`)
}
function exe3(){
    let i = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    while(i<=8){
        let idade = Number(prompt(`Informe a idade ${i}`))
        if(idade <= 15){
            f1++
        }
        else if(idade>15 && idade<=30){
            f2++
        }
        else if(idade>30 && idade<=45){
            f3++
        }
        else if(idade>45 && idade<=60){
            f4++
        }
        else{//>60
            f5++
        }
        i++// o i precisa incrementar
    }
    alert(`Faixa 1 ${f1} \nFaixa 2 ${f2} \nFaixa 3 ${f3} \nFaixa 4 ${f4} \nFaixa 5 ${f5} \n%F1 ${f1/8*100} \n%F5 ${f5/8*100}`)// \n pula linhas
}
function exe1(){
    let a, b, c, d, aux
    
    a = Number(prompt(`Informe o Valor de A`))
    b = Number(prompt(`Informe o Valor de B`))
    c = Number(prompt(`Informe o Valor de C`))
    d = Number(prompt(`Informe o Valor de D`))

    let i = 1
    while(i<=3){
        if(a>b){
           aux = a
           a = b
           b = aux 
        }
        if(b>c){
            aux = b
            b = c
            c = aux
        }
        if(c>d){
            aux = c
            c = d
            d = aux
        }
        i++
    }
    alert(`Ordem crescente ${a} ${b} ${c} ${d} e a ordem decrescente ${d} ${c} ${b} ${a}`)
}
function exe2(){

    let qtde = 120
    let lucro
    let saida = "" // variável acumuladora
    let maiorLucro = 0 // valor bem pequeno
    let maiorQtde = 0 // qtde que me dá maior lucro
    let maiorPreco = 0 // preço que me dá maior lucro
    for(let preco = 5.0; preco >= 1.0; preco = preco - 0.50){

        lucro = (preco * qtde) - 200
        if (lucro > maiorLucro){ // encontramos um lucro maior que maiorLucro
            maiorLucro = lucro
            maiorQtde = qtde
            maiorPreco = preco
        }
        saida = saida + `<tr> <td> R$ ${preco.toFixed(2)} </td>  <td> ${qtde} </td> <td> R$ 200.00 </td> <td> R$ ${lucro.toFixed(2)} </td> </tr>`
        // prepara para a próxima vez
        qtde = qtde + 26
    }
    document.getElementById("corpo").innerHTML = saida
    alert(`Maior lucro ${maiorLucro} com qtde ${maiorQtde} com preço ${maiorPreco}`)
    
}
function exe6()
{
    let valor // valor definido pelo usario
    let tipo
    let totalavista = 0 // valor que será acumulado
    let totalaprazo = 0
    for (let cont = 1; cont <= 15; cont++)
    {
        valor = Number(prompt(`Informe o valor da transação ${cont}`))
        tipo = prompt(`Informe o tipo da transação (V para á vista) e (P para á prazo) ${cont}`).toUpperCase()

        if (tipo == 'V')
        {
            totalavista = totalavista + valor
        }
        else if (tipo == 'P')
        {
            totalaprazo = totalaprazo + valor
        }
    }
    let totalgeral = totalaprazo + totalavista
    let parcela = totalaprazo / 3

    alert(`Total á Vista ${totalavista} - Total á prazo ${totalaprazo} - Total geral ${totalgeral} - 1a Parcela a prazo ${parcela}`)

}