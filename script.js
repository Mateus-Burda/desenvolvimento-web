let valorFinalEncantos = 3600;
let valorFinalSuper = 4600;


document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;


document.getElementById("num-convidados").onclick = function(){
    let convidados = document.getElementById("num-convidados").value;
    convidados = Number(convidados);

    if((convidados>=30)&&(convidados <= 100)){
        let diferença = convidados - 50;
        diferença *= 40;
        valorFinalEncantos = 3600;
        valorFinalEncantos += diferença;
        document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
        console.log( "valorFinal="+ valorFinalEncantos+ "   "+ "diferença= "+diferença+"   ");
    }else{
        document.getElementById("valor-pacote-encantos").innerHTML = "Nossa capacitade é de<br>30 até 100 convidados";
    }
    
}

document.getElementById("num-convidados1").onclick = function(){
    let convidados = document.getElementById("num-convidados1").value;
    convidados = Number(convidados);

    if((convidados>=30)&&(convidados <= 100)){
        let diferença = convidados - 50;
        diferença *= 45;
        valorFinalSuper = 4600;
        valorFinalSuper += diferença;
        document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;
    }else{
        document.getElementById("valor-pacote-superencantos").innerHTML = "Nossa capacitade é de<br>30 até 100 convidados";
    }
}