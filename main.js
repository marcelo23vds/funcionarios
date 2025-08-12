'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}


function criarCards(funcionario){

    //sessao principal (main) do html que ja existe
    const sessaoPrincipal = document.getElementById('sessaoPrincipal')
    //adicionando com js um elemento novo (div)
    const cardFuncionarios = document.createElement('div')

    // adicionando a criação dos 3 elementos que o card vai possuir em constantes(ou variaveis)
    const imagem = document.createElement('img')
    const nome = document.createElement('span')
    const cargo = document.createElement('p')

    //informando a source da imagem e o texto dos outros 2 elementos, todas informações sendo retiradas do json que foi importado
    imagem.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo
    
    //adicionando os 3 elementos em cada div
    cardFuncionarios.appendChild(imagem)
    cardFuncionarios.appendChild(nome)
    cardFuncionarios.appendChild(cargo)

    //colocando as divs dentro de main
    sessaoPrincipal.appendChild(cardFuncionarios)

}

function carregarCards(){
    funcionarios.forEach(criarCards)
}

carregarCards()