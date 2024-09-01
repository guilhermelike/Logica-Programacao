function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = document.getElementById('qtd').value;

    if (quantidadeCompra <= 0 || quantidadeCompra == '') {
        alert('Quantidade inválida!');
    }

    if (tipoIngresso == 'pista') {
       comprarPista(quantidadeCompra);
    } 
    
    else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidadeCompra);
    } 
        
    else if(tipoIngresso == 'inferior'){
        comprarInferior(quantidadeCompra);
    } 
    
    else{
        alert('Selecione um tipo de ingresso válido!');
        return;
    }

    document.getElementById('qtd').value = 0;
}

function comprarPista (qtd){
    let pista = document.getElementById('qtd-pista');
    if(qtd > parseInt(pista.innerHTML)){
        alert('Quantidade indisponível!');
    }else{
        pista.innerHTML -= qtd;
        alert('Ingresso(s) comprado(s) com sucesso!');
    }
}

function comprarSuperior(qtd){
    let superior = document.getElementById('qtd-superior');
    if(qtd > parseInt(superior.innerHTML)){
        alert('Quantidade indisponível!');
    }else{
    superior.innerHTML -= qtd;
    alert('Ingresso(s) comprado(s) com sucesso!');
    }
}

function comprarInferior(qtd){
    let inferior = document.getElementById('qtd-inferior');
    if(qtd > parseInt(inferior.innerHTML)){
        alert('Quantidade indisponível!');
    }else{
    inferior.innerHTML -= qtd;
    alert('Ingresso(s) comprado(s) com sucesso!');

    }
}