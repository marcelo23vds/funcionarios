'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}


function criarCards(funcionario){

    const cardFuncionarios = document.createElement('div')
    
    const imagem = document.createElement('img')
    const nome = document.createElement('span')
    const cargo = document.createElement('span')

    imagem.src = funcionario.imagem
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo
    
    cardFuncionarios.appendChild(imagem)
    cardFuncionarios.appendChild(nome)
    cardFuncionarios.appendChild(cargo)

}

function carregarCards(){
    funcionarios.forEach(criarCards)
}

carregarCards()