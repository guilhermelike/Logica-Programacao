// function alterarStatus(id){
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagem = gameClicado.querySelector('.dashboard__item__img');
//     let botao = gameClicado.querySelector('.dashboard__item__button');

//     if (id == 1){
//         botao.classList.toggle('dashboard__item__button--return');
//         imagem.classList.toggle('dashboard__item__img--rented');
//         if(botao.classList.contains('dashboard__item__button--return')){
//             botao.innerHTML = 'Devolver';
//         }else{
//             botao.innerHTML = 'Alugar';
//         }
//     }
//     else if(id == 2){
//         botao.classList.toggle('dashboard__item__button--return');
//         imagem.classList.toggle('dashboard__item__img--rented');
//         if(botao.classList.contains('dashboard__item__button--return')){
//             botao.innerHTML = 'Devolver';
//         }else{
//             botao.innerHTML = 'Alugar';
//         }
//     }
//     else{
//         botao.classList.toggle('dashboard__item__button--return');
//         imagem.classList.toggle('dashboard__item__img--rented');
//         if(botao.classList.contains('dashboard__item__button--return')){
//             botao.innerHTML = 'Devolver';
//         }else{
//             botao.innerHTML = 'Alugar';
//         }
//     }
// }


                    // OUTRA FORMA DE FAZER

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        let confirma = confirm('Você realmente deseja devolver o jogo?');
        if(confirma){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        }
        
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}              
