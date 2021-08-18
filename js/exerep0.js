let exe0 = function(){
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
let exe3 = function(){
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
let exe2 = function(){

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
let exe6 = function()
{
    let valor // valor definido pelo usario
    let tipo
    let totalavista = 0 // valor que será acumulado
    let totalaprazo = 0
    for (let cont = 1; cont <= 15; cont++)
    {
        valor = Number(prompt(`Informe o valor da transação ${cont}`))//.toUpperCasse deixa a letra em capslock
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
let ex = function(){
    let sal 
    let op
    let mes
    op = Number(prompt("Escolha a opção desejada:\n1. Novo Salário\n2. Férias\n3. Décimo Terceiro\n4. Sair"))
    if(op>4){
        alert("Opção Invalida!")
    }
    switch(op){
        case 1: sal = Number(prompt("Informe seu salário"))
                if(sal<210){
                    sal = sal + (sal*15)/100
                }
                else if(sal>=210 && sal<=600){
                    sal = sal + (sal*10)/100
                }
                else if(sal>600){
                    sal = sal + (sal*5)/100
                }
                document.getElementById("result").innerHTML = `Seu novo salário é R$${sal.toFixed(2)}`
                break
        case 2: sal = Number(prompt("Informe seu salário"))
                sal = sal + (sal*1)/3
                document.getElementById("result").innerHTML = `O valor de suas Férias são R$${sal.toFixed(2)}`
                break
        case 3: sal = Number(prompt("Informe seu salário"))
                mes = Number(prompt("Informe os meses de trabalho -  max:12"))
                if(mes<=12 && mes>-1){
                    sal = (sal*mes)/12
                    document.getElementById("result").innerHTML = `O valor do seu décimo terceiro é R$${sal.toFixed(2)}`
                }
                else{
                    alert("Invalido!, Deve ser Informado no Máximo 12 Meses.")
                }
                break
        case 4: alert("Programa Finalizado.")
                break
    }
}
let exe24 = function(){
    let num
    let maior
    let menor
    num = Number(prompt("Informe um valor ou digite 0 para Finalizar."))
    maior = 0
    menor = num
    while(num!=0){
        if(num<0){
            alert("Invalido!")
        }
        if(num>maior && num>0){
            maior = num
        }
        if(num<menor && num>0){
            menor = num
        }
        num = Number(prompt("Informe um valor ou digite 0 para Finalizar."))
    }
    if(maior!=0 && menor!=0){
        document.getElementById("re24").innerHTML = `O maior valor é ${maior} e o menor valor é ${menor}`
    }
    else{
        alert("Programa Finalizado.")
    }
}
let exe21 = function(){
    let voto = Number(prompt(`Informe um voto`))
    let qt1 = 0; qt2 = 0; qt3 = 0; qt4 = 0; branco = 0; nulo = 0
    do{
        switch(voto){
            case 1: qt1++
                    break
            case 2: qt2++
                    break
            case 3: qt3++
                    break
            case 4: qt4++
                    break
            case 5: branco++
                    break
            case 6: nulo++
                    break

        }
        voto = Number(prompt(`Informe um voto. Digite 0 para finalizar`))
    }while(voto!=0)
    let total = qt1+qt2+qt3+qt4+branco+nulo
    console.log(`Candidato 1 -${qt1} Candidato 2 -${qt2} Candidato 3 -${qt3} Candidato 4 -${qt4}`)
    console.log(`Votos Branco ${branco} - percentual ${branco/total*100} Votos Nulo ${nulo} - percentual ${nulo/total*100}`)
}
let exercicio23 = function(){
    let op
    let sal
    do{
        op = Number(prompt("Digite\n1 - Novo salário\n2 - Férias\n3 - Décimo Terceiro\n4 - Sair"))
        switch(op){
            case 1: sal = Number(prompt("Informe o salário"))
                    if(sal<210){
                        alert(`Novo Salário ${sal+sal*15/100}`)
                    }
                    else if(sal>210 && sal<=600){
                        alert(`Novo Salário ${sal+sal*10/100}`)
                    }
                    else{
                        alert(`Novo Salário ${sal+sal*5/100}`)
                    }
                    break
            case 2: sal = Number(prompt("Informe o salário"))
                    alert(`O valor das Férias é ${sal+1/3*sal}`)
                    break
            case 3: sal = Number(prompt(`Informe o salário`))
                    let mes = Number(prompt(`Informe os meses de trabalho`))
                    alert(`Décimo Terceiro a receber ${sal*mes/12}`)
                    break
            case 4: 
                    break
            default: alert(`Opçãao Invalida!`)
                    
        }
    }while(op!=4)
}
