let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo != ''){
    amigos.push(amigo.value);
    } else{
        alert('É necessário preencher um nome!')
    }
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }


    amigo.value = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar(){
    amigos = [];
    console.log(amigos);
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}


// ESSA VERSÃO SÓ FUNCIONA COM QUANTIDADES PARES

// let amigos = [];

// function adicionar(){
//     let nomeAmigo = document.getElementById('nome-amigo').value;
//     document.getElementById('nome-amigo').value = '';

//     if(nomeAmigo != ''){
//         amigos.push(nomeAmigo);
//     } else{
//         alert('Nome vazio!');
//     }
    
//     let listaAmigos = document.getElementById('lista-amigos');
//     listaAmigos.textContent = amigos;

// }

// function sortear(){
//     verificaQtd(amigos);
//     criaDuplas(array)

// }

// function verificaQtd(array){
//     if (amigos.length % 2 == 0){
//     }else{
//         alert('Quantidade ímpar! Adicione mais um amigo.')
//     }
// }

// function criaDuplas(array){
//     let duplas = {};
//     for(let i = 0; i <= (array.length / 2); i++){
//         duplas[`dupla${i}`] = [];

//         let indice1 = Math.floor(Math.random() * array.length);
//         let sorteado1 = array[indice1];
//         array.splice(indice1, 1);

//         let indice2 = Math.floor(Math.random() * array.length);
//         let sorteado2 = array[indice2];
//         array.splice(indice2, 1);

//         duplas[`dupla${i}`].push(sorteado1)
//         duplas[`dupla${i}`].push(sorteado2)

//         imprimeNaTela(duplas[`dupla${i}`])
//     }
// }

// function imprimeNaTela(dupla){
//     let listaSorteio = document.getElementById('lista-sorteio');
//     listaSorteio.innerHTML += dupla.join(" -> ") + "<br>";
// }

// function reiniciar(){
//     amigos = [];
//     console.log(amigos);
//     document.getElementById('lista-amigos').textContent = '';
//     document.getElementById('lista-sorteio').textContent = '';
// }






// 1 - CRIAR O ARRAY VAZIO - FEITO
// 2 - PEGAR O VALUE AO ADICIONAR E ADICIONAR NO ARRAY - FEITO
// 3 - MOSTRAR OS VALORES DO ARRAY NA TELA - FEITO
// 4 - CRIAR UMA FUNÇÃO QUE SEPARE OS ITENS DO ARRAY EM PARES ALEATÓRIOS - FEITO
// 5 - IMPRIMIR NA TELA - FEITO
// 6 - FUNÇÃO PARA LIMPAR A TELA - FEITO