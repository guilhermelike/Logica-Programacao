let total = 0;
function adicionar(){
    let produto = document.getElementById('produto').value;
    console.log(produto);
    var separacao = produto.split("-");
    let nome = separacao[0];
    let preco = separacao[1];
    let secao = document.getElementById('lista-produtos');
    let qtd = document.getElementById('quantidade').value;
    console.log
    if(qtd == null || qtd == ''){
        alert('Selecione uma quantidade!');
        return;
    } else if(qtd < 0){
        alert('Quantidade inválida!');
        return;
    } else{
        let valorNovo = preco.replace("R$", "");
        let valorTotal = valorNovo * qtd;
        total += valorTotal;
        let linhaProduto = `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qtd}x</span> ${nome} <span class="texto-azul">R$${valorTotal}</span>
        </section>
        `;
        secao.innerHTML += linhaProduto;
        document.getElementById('valor-total').textContent = `R$${total}`;
        document.getElementById('quantidade').value = 0;
    }
}

function limpar(){
    let secao = document.getElementById('lista-produtos');
    let secoes = document.getElementsByClassName('carrinho__produtos__produto');
    
    for (let i = 0; i < secoes.length; i++) {
        if (secoes[i].children.length > 0) {
            let confirmacao = confirm("Deseja realmente limpar o carrinho?");
            if(confirmacao){
                secao.innerHTML = '';
                total = 0;
                document.getElementById('valor-total').textContent = `Nenhum produto no carrinho!`;
            }
            else{
                return;
            }
        } 
    };
   
 
}