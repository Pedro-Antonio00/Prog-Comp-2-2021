let exe0 = function(){
    let vet = [] //declaração do vetor
    for(let i = 0;i<5;i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }

    for(let i = 0;i<5;i++){
        vet[i] = vet[i]+10
    }
    console.log(vet)
}
let exe1 = function(){
    let vet = []
    let vetpar = []
    let vetimpar = []
    for(let i = 0;i<6;i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    for(let i = 0; i<6;i++){
        if(vet[i]%2 == 0){
            vetpar.push(vet[i])
        }
        else{
            vetimpar.push(vet[i])
        }
    }
    console.log(`Os número pares são ${vetpar} e a quantidade é ${vetpar.length}`)
}
let exe3 = () =>{
    let vet1 = []
    let vet2 = []
    let achou = false//var booleana
    for(let i=0;i<5;i++){
        vet1.push(prompt(`Ifnorme o código do ${i+1}ºProduto`))
        vet2.push(Number(prompt(`Ifnorme a quantidade em estoque do ${i+1}ºProduto`)))
    }
    let codcl=Number(prompt(`Informe o código do cliente`))
    let quant
    do{
        let cod=prompt(`Informe o código para compra`)
        for(let i=0;i<5;i++){
            if(codcl==vet1[i]){
                achou = true
                let quant = Number(prompt(`Informe a quantidade para compara`))
                if(quant<=vet2[i]){
                    vet2[i] = vet2[i] - quant
                }
                else{
                    alert(`Infelizmente, não temos o produto`)
                }
            }
        }
        if(achou == false){
            alert(`Infelizmente, não temos o produto`)
        }
        quant=Number(prompt(`Informe a quantidade do produto`))
        codcl=Number(prompt(`Informe o código do cliente para próxima compra ou digite 0 para finalizar.`))
    }while(codcl!=0)
}
let exe2 = () =>{
    let vet=[]
    let vetdois = []
    let vettres = []
    let vetambos = []
    for(let i=0;i<7;i++)
    {
        vet.push(Number(prompt(`Informe um Número:`)))    
    }
    for(let i=0;i<7;i++){
        if(vet[i]%2==0)
        {
            vetdois.push(vet[i])
        }
    }
    for(let i=0;i<7;i++){
        if(vet[i]%3==0)
        {
            vettres.push(vet[i])
        }
    }
    for(let i=0;i<7;i++){
        if(vet[i]%2==0 && vet[i]%3==0)
        {
            vetambos.push(vet[i])
        }
    }
    console.log(`Os valores que são multiplos de 2 são - ${vetdois}`)
    console.log(`Os valores que são multiplos de 3 são - ${vettres}`)
    console.log(`Os valores que são multiplos de ambos são - ${vetambos}`)
}
//arrow function = function
//Ecma Script 6
let exe4 = () =>{
    let vet=[]
    for(let i=0;i<15;i++)
    {
        vet.push(Number(prompt(`Ifnorme o Núemro ${i+1}`)))
    }

    let po30 = []
    for(let i=0;i<15;i++)
    {
        if(vet[i] == 30)
        {
            po30.push(i)// guarda a posição i q possui o 30
        }
    }
    console.log(`As posições onde aparece, o número 30 são ${po30}`)
}
let exe5 = () =>{
    let alunoslo=[]
    for(let i=0;i<5;i++)
    {
        alunoslo.push(Number(prompt(`Informe seu código - Lógica`)))
    }
    let alunosli=[]
    for(let i=0;i<5;i++)
    {
        alunosli.push(Number(prompt(`Informe seu código - Linguagem De Programação`)))
    }
    let inter=[]
    for(let a=0;a<5;a++)
    {
        for(let i=0;i<5;i++)
        {
            if(alunoslo[a] == alunosli[i])
            {
                inter.push(alunoslo[a])
            }
        }
    }
    console.log(`Os alunos que fazem as duas disciplinas são ${inter}`)
}
let exe6 = () =>{
    let vendas=[]
    let percentual=[]
    let nome=[]

    for(let i=0;i<5;i++){
        nome.push(prompt(`Informe o nome do ${i+1}º vendedor.`))
        vendas.push(Number(prompt(`Informe o total de vendas do ${i+1}º vendedor`)))
        percentual.push(Number(prompt(`Informe o percentual de comissão que o ${i+1}º vendedor tem direito`)))
    }
    let nmaior
    let nmenor
    let maior=0
    let menor=(percentual[0]*vendas[0])/100
    for (let i=0;i<5;i++) {
        if((percentual[i]*vendas[i])/100>maior){
            maior=(percentual[i]*vendas[i])/100
            nmaior=nome[i]
        }
    }
    for (let i=0;i<5;i++) {
        if((percentual[i]*vendas[i])/100<menor){
            menor=(percentual[i]*vendas[i])/100
            nmenor=nome[i]
        }
    }
    for(let i=0;i<5;i++){
        console.log(`O vendedor ${nome[i]} vai receber ${((percentual[i]*vendas[i])/100).toFixed(2)} - vendeu: ${vendas[i]}`)
    }
    console.log(`O maior valor a receber é ${(maior).toFixed(2)} para o vendedor ${nmaior}`)
    console.log(`O menor valor a receber é ${(menor).toFixed(2)} para o vendedor ${nmenor}`)

    
}