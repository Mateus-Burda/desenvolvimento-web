let valorFinalEncantos = 3600;
let valorFinalSuper = 4600;



document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;


function diaEncantos(){
    if(document.getElementById("seg-qui-encantos").checked == true){
        valorFinalEncantos = 3600;

    }else if(document.getElementById("sex-dom-encantos").checked == true){
        valorFinalEncantos = 3900;
    }
}

function diaSuper(){
    if(document.getElementById("seg-qui-super").checked == true){
        valorFinalSuper = 4600;

    }else if(document.getElementById("sex-dom-super").checked == true){
        valorFinalSuper = 4990;
    }
}

document.getElementById("num-convidados").onchange = function alterarValorEncantos(){
    let convidados = document.getElementById("num-convidados").value;
    convidados = Number(convidados);

    if((convidados>=30)&&(convidados <= 100)){
        let diferença = convidados - 50;
        diferença *= 40;
        diaEncantos();
        valorFinalEncantos += diferença;
        document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
        console.log( "valorFinal="+ valorFinalEncantos+ "   "+ "diferença= "+diferença+"   ");
    }else{
        document.getElementById("valor-pacote-encantos").innerHTML = "Nossa capacidade é de<br>30 até 100 convidados";
    }
}
document.getElementById("num-convidados1").onchange = function alterarValorSuper(){
    let convidados = document.getElementById("num-convidados1").value;
    convidados = Number(convidados);

    if((convidados>=30)&&(convidados <= 100)){
        let diferença = convidados - 50;
        diferença *= 45;
        diaSuper();
        valorFinalSuper += diferença;
        document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;
    }else{
        document.getElementById("valor-pacote-superencantos").innerHTML = "Nossa capacidade é de<br>30 até 100 convidados";
    }
}
    document.getElementById("seg-qui-encantos").onchange = function(){
        diaEncantos()
        document.getElementById("num-convidados").value = 50;
        document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
    };
    document.getElementById("sex-dom-encantos").onchange = function(){
        diaEncantos()
        document.getElementById("num-convidados").value = 50;
        document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinalEncantos;
    };

    document.getElementById("seg-qui-super").onchange = function(){
        document.getElementById("num-convidados1").value = 50;
        diaSuper()
        document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;
    };
    document.getElementById("sex-dom-super").onchange = function(){
        document.getElementById("num-convidados1").value = 50;
        diaSuper()
        document.getElementById("valor-pacote-superencantos").innerHTML = "Valor R$ "+ valorFinalSuper;
    };