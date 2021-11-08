var listaProdutos = [[0,'Luva','luva.jpg',false,119.99],[1,'Bola de Baseball','bola-baseball.webp',false,549.99],[2,'Taco de Madeira','taco-madeira.png',false,129.99],[3,'Luva Receptor','luva-receptor.jpg',false,1100],[4,'Luva Batedor','luva-batedor.jpg',false,119.99],[5,'Capacete','capacete.jpg',false,219.99],[6,'Luva para 1ª Base','luva-base.jpg',false,1100],[7,'Bola de Softball','bola-softball.jpg',false,360],[8,'Taco de Alumínio','taco-metal.jpg',false,199.99],[9,'Material de Receptor','material.jpg',false,4200],[10,'Luva para Corredor','luva-corredor.jpg',false,119.99],[11,'Capacete com Grade','capacete-grade.jpg',false,459.99]];

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}
function montarCardProdutos(){
    document.getElementById("divproduto").innerHTML="";
    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo ="";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="../img/' +listaProdutos[i][2]+'"/>';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-card-preco">';
        conteudo += 'R$' + listaProdutos[i][4];
        conteudo += '</div>';

        if(listaProdutos[i][3]==false)
        {
            conteudo += '<div class="div-card-comprar">';
            conteudo += '<button class="botao-card-comprar" onclick="comprar('+ listaProdutos[i][0] +')">Comprar</button>';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprado-carrinho">';
            conteudo += '<button class="botao-card-comprar" onclick="comprar('+ listaProdutos[i][0] +')">Comprado</button>';
            conteudo += '</div>';
        }
        conteudo += '</div>';

        document.getElementById("divproduto").innerHTML += conteudo;
    }
}
function comprar(id){
    listaProdutos[id][3]=true
    carrinho.push(listaProdutos[id]);
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    montarCardProdutos();
}

