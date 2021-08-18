function cal(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("opção").value)

    if(op == 1){
        document.getElementById("result").innerHTML = `A média é ${(n1+n2)/2}`
    }
    else if(op == 2){
        if(n1>n2){
            document.getElementById("result").innerHTML = `A diferença é ${n1-n2}`
        }
        else{
            document.getElementById("result").innerHTML = `A diferença é ${n2-n1}`
        }
        
    }
    else if(op == 3){
        document.getElementById("result").innerHTML = `O produto entre os dois é ${n1*n2}`
    }
}