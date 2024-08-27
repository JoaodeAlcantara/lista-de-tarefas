function adicionar() {
    let valorInput = document.querySelector('input')
    let lista = document.createElement('li')

    lista.innerHTML = `${valorInput.value} 
    ${'<span onclick="apagar(this)"><img src="trash.svg" alt=""></span>'}`

    document.querySelector('ul').appendChild(lista)

    valorInput.value = ''
}

function apagar(lista) {
    lista.parentElement.remove()
}