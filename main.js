function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if ((elemento != null) && (elemento.localName === 'audio')) {
        elemento.play
    }
    else {
        alert('elemento ou seletor não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')
for (contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (evento) {
        if ((evento.code === 'Space') || (evento.code === 'Enter')) {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
         //Teste com forEach
/*listaDeTeclas.forEach(som => {
    tecla = listaDeTeclas[contador]
    //console.log(tecla)
    instrumento = som.classList[1]
    tecla.onclick = function(){tocaSom(`#som_${instrumento}`)}
    contador += 1
})*/
