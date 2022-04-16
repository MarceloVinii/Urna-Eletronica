let seuVotoPara = document.querySelector('.d-1-1 span') // Pega a tag HTML informada no querySelector
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0 // Pega a etapa na posição 0
let numero = '' // começando uma variavel vazia para armazenar os numeros
let votoBranco = false
let votos = [] // criando um array vazio para armazenar os votos

function comecarEtapa() {
  let etapa = etapas[etapaAtual] // a variavel etapa está recebendo o array de etapas e passando a etapa atual

  let numeroHTML = ''
  numero = ''
  votoBranco = false

  for (let i = 0; i < etapa.numeros; i++) {
    // criando um loop onde a quantidade de numeros que irá aparecer na tela, será de acordo com a etapa
    if (i === 0) {
      // se o numero for igual a 0, ou seja, se não estiver preenchido, entrará nessa condição
      numeroHTML += '<div class="numero pisca"></div>' // cria uma caixa de numero piscando
    } else {
      numeroHTML += '<div class="numero"></div>' // monta uma caixa de numero sem piscar
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHTML // montando o html com a quantidade de numeros
  }
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual]

  let candidato = etapa.candidatos.filter(item => {
    // item vai ser a variavel que recebe os candidatos
    if (item.numero === numero) {
      // verifica se existe algum numero do array de candidatos que seja igual ao numero preenchido
      return true
    } else {
      return false
    }
  })

  if (candidato.length > 0) {
    // verifica se
    candidato = candidato[0]
    seuVotoPara.style.display = 'block' // a variavel passa a ficar visivel
    aviso.style.display = 'block' // a variavel passa a ficar visivel
    descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}` // está montando a descrição

    let fotosHTML = ''
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHTML += `<div class="d-1-image small">
        <img src="imagens/${candidato.fotos[i].url}" alt="" />
        ${candidato.fotos[i].legenda}
      </div>`
      } else {
        fotosHTML += `<div class="d-1-image">
        <img src="imagens/${candidato.fotos[i].url}" alt="" />
        ${candidato.fotos[i].legenda}
      </div>`
      }
    }

    lateral.innerHTML = fotosHTML // montando a foto do candidato encontrado, na parte lateral da urna
  } else {
    // Entra nessa condição caso o numero digitado esteja errado
    seuVotoPara.style.display = 'block' // a variavel passa a ficar visivel
    aviso.style.display = 'block' // a variavel passa a ficar visivel
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
  }
}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca') // vai procurar se tem algum numero piscando
  if (elNumero !== null) {
    // verifica se numero é diferente de null, se for, significa que o numero clicado, será preenchido.
    elNumero.innerHTML = n
    numero = `${numero}${n}` // pega o numero armazenado na varial numero e concatena com o novo numero preenchido.
    elNumero.classList.remove('pisca') // faz com que a variavel que foi preenchida e estava piscando, pare de piscar
    if (elNumero.nextElementSibling !== null) {
      // verifica se tem um proximo item para ser preenchido
      elNumero.nextElementSibling.classList.add('pisca') // faz com que o proximo item fique piscando
    } else {
      atualizaInterface()
    }
  }
}

function branco(n) {
  if (numero === '') {
    votoBranco = true
    seuVotoPara.style.display = 'block' // a variavel passa a ficar visivel
    aviso.style.display = 'block' // a variavel passa a ficar visivel
    numeros.innerHTML = ''
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>'
  } else {
    alert('Para votar em BRANCO, não pode ter digitado nenhum numero!')
  }
}

function corrige(n) {
  comecarEtapa()
}
function confirma() {
  let etapa = etapas[etapaAtual]

  let votoConfirmado = false

  if (votoBranco === true) {
    votoConfirmado = true
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco'
    })
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    })
  }

  if (votoConfirmado) {
    etapaAtual++
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa()
    } else {
      document.querySelector('.tela').innerHTML =
        '<div class="aviso-final pisca">FIM</div>'
      console.log(votos)
    }
  }
}

comecarEtapa()
