document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let valorInput = document.querySelector('input');
    let lista = document.createElement('li');

    if (!valorInput.value || valorInput.value === ' ') {
        document.querySelector('#erro').innerHTML = 'Vazio, adicione alguma tarefa'
    } else {
        document.querySelector('#erro').innerHTML = ''
        lista.innerHTML = `${valorInput.value} <div id="func">
            <span class="check" onclick="concluir(this)"><i class="fa-solid fa-square-check"></i></span>
            <span class="trash" onclick="apagar(this)"><i class="fa-solid fa-trash-can"></i></span>
        </div>`;

        document.querySelector('ul').appendChild(lista);

        valorInput.value = '';
    }

})

function apagar(elemento) {
    elemento.parentElement.parentElement.remove();
}

function concluir(elemento) {
    let item = elemento.parentElement.parentElement;
    item.classList.toggle('concluido') 
    elemento.style.color = item.classList.contains('concluido') ? 'green' : '' 
}

