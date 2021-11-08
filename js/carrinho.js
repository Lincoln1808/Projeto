window.onload = function(){
    mostrar();
}
function mostrar(){
    document.getElementById("divcarrinho").innerHTML="";
    document.getElementById("apagar-car").innerHTML="";
    var auxiliar = JSON.parse(window.localStorage.getItem("carrinho"));
    console.log(auxiliar);
    for(var i = 0; i < auxiliar.length; i++)
    {    
        var cont = "";
        cont += '<div class="cart-carrinho">';
        cont += '<div class="nome">';
        cont += auxiliar[i][1];
        cont += '</div>';
        cont += '<div class="preco">';
        cont += 'R$' + auxiliar[i][4];
        cont += '</div>';
        cont += '</div>';
        document.getElementById("divcarrinho").innerHTML += cont;
    }
    var con = "";
    con += '<div class="cart-limpar">';
    con += '<button class="botao-limpar" onclick="limpar()">Apagar</button>';
    con += '</div>';
    document.getElementById("apagar-car").innerHTML += con;
}
function limpar(){
    localStorage.clear();
    mostrar();
}
