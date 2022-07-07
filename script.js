let valorFinal = 3400;
valorFinal = Number(valorFinal)


document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinal;


document.getElementById("num-convidados").onclick = function(){
    let convidados = document.getElementById("num-convidados").value;
    convidados = Number(convidados);

    if(convidados=>50){
        let diferença = convidados - 50;
        diferença *= 40;
        valorFinal = 3400;
        valorFinal += diferença;
        document.getElementById("valor-pacote-encantos").innerHTML = "Valor R$ "+ valorFinal;
    }
}