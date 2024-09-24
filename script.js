function adicionar() {
    let valorInput = document.querySelector('input');
    let lista = document.createElement('li');

    lista.innerHTML = `${valorInput.value} <div id="func">
            <span id="check" onclick="concluir(this)"><i class="fa-solid fa-square-check"></i></span>
            <span id="trash" onclick="apagar(this)"><i class="fa-solid fa-trash-can"></i></span>
        </div>`;

    document.querySelector('ul').appendChild(lista);

    valorInput.value = '';
}

function apagar(elemento) {
    elemento.parentElement.parentElement.remove();
}

function concluir(elemento) {
    let item = elemento.parentElement.parentElement;
    item.style.backgroundColor = 'rgba(13, 27, 42, 1)';
    item.style.color = 'white';
    item.style.textDecoration = 'line-through'
}
